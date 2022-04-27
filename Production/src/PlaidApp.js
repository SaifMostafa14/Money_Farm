
// import './BudgetPage.css';
import React, { useState, useEffect, useRef } from 'react';
import {Container, Alert, Navbar, NavItem} from 'react-bootstrap';
import * as B from 'react-bootstrap';
import BudgetList from './BudgetList';
import SpendingList from './SpendingList';
import SpendingPage from "./SpendingPage";
import { usePlaidLink } from 'react-plaid-link';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const axios = require('axios');


function NavBar() {
    console.log("Running Navbar()");

    return (

        <Navbar bg="dark" variant="dark" className='nav justify-content-center'>
            <Container className='plaid-contenir'>
                <Navbar.Brand >GreenPocket</Navbar.Brand>

                <Link className=" nav nav-pills nav-fill nav-link" to="/budget">Budget</Link>
                <Link className="nav nav-pills nav-fill nav-link" to="/connect_bank">Conect Bank</Link>
                <Link className="nav nav-pills nav-fill nav-link" to="/spending_page">Spending</Link>

            </Container>
        </Navbar>
    );

}


function ConnectBank(props) {
    console.log("Running ConnectBank()");

    return (
        <>
            <NavBar {...props} />
            <Alert className="mb-2" variant ="success">
                <B.Alert.Heading>Start by Connecting Your Account</B.Alert.Heading>
                <p>Click "Connect to Bank" to securely link your bank account to our budget app! </p>
            </Alert>
            <B.Button variant="primary" onClick={props.open}>Connect to Bank</B.Button>
            {props.accessToken ? (
                <>
                    <B.Form.Control type="date" name='start_date' value={props.startDate}
                                    onChange={e => props.setStartDate(e.target.value)}/>
                    <B.Form.Control type="date" name='end_date' value={props.endDate}
                                    onChange={e => props.setEndDate(e.target.value)}/>

                    <B.Button variant="secondary" onClick={props.getTransactionsFunction}>Get Transactions</B.Button>
                    {props.balance ? (
                        <SpendingList {...props}/>
                    ) : null}

                </>
            ) : null }
        </>
    );
};

function Spending(props) {
    console.log("Running Budget()");
    return (
        <>
            <NavBar {...props}/>

            {props.balance ? (

                <div className="col-sm" id="budget-col">


                    <SpendingPage />
                </div>
            ) : null }
        </>
    );
}


function Budget(props) {
    console.log("Running Budget()");
    return (
        <>
            <NavBar {...props}/>

            {props.transactions ? (

                <div className="col-sm" id="budget-col">


                    <BudgetList {...props}/>
                </div>
            ) : null }
        </>
    );
}

function App() {
    console.log("Running App()");
    const [linkToken, setLinkToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        axios.get("https://birdboombox.com/api/create_link_token")
            .then(response => { console.log(response); setLinkToken(response.data.link_token)});
    }, []);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            axios.post("https://birdboombox.com/api/exchange_public_token",
                {"public_token": public_token})
                .then(response => { setAccessToken(response.data.access_token) });
        },
    });

    const [balance, setBalance] = useState(null);
    useEffect(() => {
        if(accessToken) {
            axios.post("https://birdboombox.com/api/getBalance",
                {"access_token": accessToken})
                .then(response => { setBalance(response.data) });
        }
    }, [accessToken]);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const getTransactionsFunction = () => {
        if(accessToken) {
            axios.post("https://birdboombox.com/api/getTransactions",
                {"access_token": accessToken, "start_date": startDate, "end_date": endDate})
                .then(response => { if(! response.data.error) { setTransactions(response.data) }});
        }
    };
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/connect_bank" element={
                    <ConnectBank open={open}
                                 accessToken={accessToken}
                                 balance={balance}
                                 getTransactionsFunction={getTransactionsFunction}
                                 transactions={transactions}
                                 startDate={startDate} setStartDate={setStartDate}
                                 endDateRef={endDate} setEndDate={setEndDate}
                    />
                }
                />
                <Route path="/budget" element={<Budget
                    accessToken={accessToken}
                    balance={balance}
                    getTransactionsFunction={getTransactionsFunction}
                    transactions={transactions}
                    startDate={startDate} setStartDate={setStartDate}
                    endDateRef={endDate} setEndDate={setEndDate}

                />}/>
                <Route exact path="/spending_page" element={<Spending
                    accessToken={accessToken}
                    balance={balance}
                    getTransactionsFunction={getTransactionsFunction}
                    transactions={transactions}
                    startDate={startDate} setStartDate={setStartDate}
                    endDateRef={endDate} setEndDate={setEndDate}

                />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
