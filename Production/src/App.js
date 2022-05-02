// import React, {useState} from 'react'
// // import './App.css';
// import LoginPage from './LoginPage'
// import SignupPage from './SignupPage'
// import LandingPage from "./LandingPage";
// import PlaidApp from "./PlaidApp";
// import SpendingPage from "./SpendingPage";
// import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
// import BudgetList from "./BudgetList";
//
//
// function App() {
//     return (
//
//         <BrowserRouter>
//             <Routes>
//                 <Route exact path="/" element={<LandingPage/>}/>
//                 <Route exact path="/LoginPage" element={<LoginPage/>}/>
//                 <Route exact path="/SignupPage" element={<SignupPage/>}/>
//                 <Route exact path="/PlaidApp" element={<PlaidApp/>}/>
//                 <Route exact path="/SpendingPage" element={<SpendingPage/>}/>
//                 <Route exact path="/BudgetList" element={<BudgetList/>}/>
//             </Routes>
//         </BrowserRouter>
//
//     )
// }
//
// export default App;


// import './BudgetPage.css';
import React, {useState, useEffect, useRef} from 'react';
import {Container, Alert, Navbar, NavItem} from 'react-bootstrap';
import * as B from 'react-bootstrap';
import BudgetList from './BudgetList';
import SpendingList from './SpendingList';
import SpendingPage from "./SpendingPage";
import {usePlaidLink} from 'react-plaid-link';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
// import PlaidApp from "./PlaidApp";
import HomePage from "./HomePage";

const axios = require('axios');


function NavBar() {
    console.log("Running Navbar()");

    return (

        <Navbar variant="dark" className='nav justify-content-center' id='navbar-custom'>
            <Container className=''>
                <Navbar.Brand href="/connect_bank">

                    <i className="bi bi-wallet2" id="bi-cons" fill="pink" style={{fontSize: 30}}>
                    </i>

                    GreenPocket</Navbar.Brand>

                <Link id='nav-links' className="nav nav-pills nav-fill nav-link" to="/HomePage" active>Home</Link>
                <Link id='nav-links' className=" nav nav-pills nav-fill nav-link" to="/budget">Your Budget</Link>
                <Link id='nav-links' className="nav nav-pills nav-fill nav-link" to="/SpendingPage">Your Spending</Link>

            </Container>
        </Navbar>
    );

}


function ConnectBank(props) {
    console.log("Running ConnectBank()");

    return (
        <>
            <NavBar {...props} />
            {props.accessToken ? null : (
                <>
                    <Alert className="mb-2" variant="success">
                        <B.Alert.Heading>Start by Connecting Your Account</B.Alert.Heading>
                        <p>Click "Connect to Bank" to securely link your bank account to our budget app! </p>
                    </Alert>

                    <B.Button variant="primary" onClick={props.open}>Connect to Bank</B.Button>
                </>
            )}
            {props.accessToken ? (
                <>
                    {props.balance ? (
                        <SpendingPage {...props}/>
                    ) : null}


                </>
            ) : null}
        </>
    );
};

function Home(props) {
    console.log("Running Home()");
    return (
        <>

            <div>
                <NavBar {...props}/>
                <HomePage/>

            </div>


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
            ) : null}
        </>
    );
}

function App() {
    console.log("Running App()");
    const [linkToken, setLinkToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        axios.get("https://birdboombox.com/api/create_link_token")
            .then(response => {
                console.log(response);
                setLinkToken(response.data.link_token)
            });
    }, []);

    const {open, ready} = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            axios.post("https://birdboombox.com/api/exchange_public_token",
                {"public_token": public_token})
                .then(response => {
                    setAccessToken(response.data.access_token)
                });
        },
    });

    const [balance, setBalance] = useState(null);
    useEffect(() => {
        if (accessToken) {
            axios.post("https://birdboombox.com/api/getBalance",
                {"access_token": accessToken})
                .then(response => {
                    setBalance(response.data)
                });
        }
    }, [accessToken]);

    const [startDate, setStartDate] = useState("2022-04-01");
    const [endDate, setEndDate] = useState("2022-06-01");
    const [transactions, setTransactions] = useState(null);
    const getTransactionsFunction = () => {
        if (accessToken) {
            axios.post("https://birdboombox.com/api/getTransactions",
                {"access_token": accessToken, "start_date": startDate, "end_date": endDate})
                .then(response => {
                    if (!response.data.error) {
                        setTransactions(response.data)
                    }
                });
        }
    };
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/LoginPage" element={<LoginPage/>}/>
                <Route exact path="/SignupPage" element={<SignupPage/>}/>
                <Route exact path="/HomePage" element={<Home/>}/>
                {/*<Route exact path="/PlaidApp" element={<PlaidApp/>}/>*/}
                {/*<Route exact path="/SpendingPage" element={<SpendingPage/>}/>*/}
                {/*<Route exact path="/BudgetList" element={<BudgetList/>}/>*/}
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
                <Route exact path="/SpendingPage" element={<ConnectBank
                    open={open}
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
