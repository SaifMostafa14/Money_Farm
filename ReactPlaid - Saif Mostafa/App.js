import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Button, Table, Accordion, Container } from 'react-bootstrap';
import { usePlaidLink } from 'react-plaid-link';
import * as B from 'react-bootstrap';
const axios = require('axios');


//Puts balance in table
function format_balance_for_table(balance) {
    if(balance) {
        return balance.Balance.accounts.map(acct => ({account_id: acct.account_id, name: acct.name, type: acct.type, subtype: acct.subtype, balance: acct.balances.current}));
    } else {
        return null;
    }
}

function format_transaction_for_table(transactions) {
    if(transactions) {
        return transactions.map(trans => ({ name: trans.name, 
            amount: trans.amount, date: trans.date,
            category: trans.category, pending: trans.pending}));
    } else {
        return null;
    }
}

function App() {

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
            .then(response => { setBalance(format_balance_for_table(response.data)) });
        }
    }, [accessToken]);


    const startDateRef = useRef();
    const endDateRef = useRef();

    const [transactions, setTransactions] = useState(null);
    const getTransactionsFunction = () => {
        if(accessToken) {
            axios.post("https://birdboombox.com/api/getTransactions",
                {"access_token": accessToken, "start_date": startDateRef.current.value,
                    "end_date": endDateRef.current.value})
                .then(response => { if(! response.data.error) { setTransactions(format_transaction_for_table(response.data) ) }});
        }
    };

    return (
        <>
            <h1>Plaid attempt</h1>
            <>
            <B.Button variant="primary" onClick={open}>Connect to Bank</B.Button>
            {accessToken ? (
             <>

                <B.Form.Control type="date" name='start_date' ref={startDateRef} />
                <B.Form.Control type="date" name='end_date' ref={endDateRef} />
                <B.Button variant="secondary" onClick={getTransactionsFunction}>Get Transactions</B.Button>
                <p> </p>
                <p> </p>

                <Container style={{color: "red", height: 10}}> 
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Balance Table</Accordion.Header>
                        <Accordion.Body>
                        {balance ? (
                            <B.Table striped border hover>
                            <thead>
                            <tr>
                            <th>Account_ID</th><th>Name</th><th>Type</th><th>Subtype</th><th>Current Balance</th>
                            </tr>
                            </thead>

                            <tbody>
                            {balance.map(b => (
                                <tr>
                                    <td>{b.account_id}</td><td>{b.name}</td><td>{b.type}</td><td>{b.subtype}</td><td>{b.balance}</td>
                                </tr>
                            ))}
                            </tbody>
                            </B.Table>
                        ) : null}
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Transactions Table</Accordion.Header>
                        <Accordion.Body>
                        {transactions ? (
                            <B.Table striped border hover>
                            <thead>
                            <tr>
                            <th>Date</th><th>Name</th><th>Category</th><th>Pending?</th><th>Amount</th>
                            </tr>
                            </thead>

                            <tbody>
                            {transactions.map(t => (
                                <tr>
                                    <td>{t.date}</td><td>{t.name}</td><td>{t.category}</td>
                                    <td>{t.pending}</td><td>{t.amount}</td>
                                </tr>
                            ))}

                            
                            </tbody>
                            </B.Table>
                        ) : null }
                                    
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Container>
            <p> </p>
            <p> </p>
            </>
        ) : null }
        </>   
        </>
    ); 

} 

export default App;