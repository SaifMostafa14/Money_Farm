import './App.css';
import React from 'react'
import {Link} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { Button, Table, Accordion, Carousel, Container, Row } from 'react-bootstrap';
import { usePlaidLink } from 'react-plaid-link';
import * as B from 'react-bootstrap';
const axios = require('axios');


//Puts balance in table
function format_balance_for_table(balance) {
    if(balance) { return balance.Balance.accounts.map(acct => ({id: acct.account_id, name: acct.name, type: acct.type, subtype: acct.subtype, balance: acct.balances.current}))
        
                   
    } else {
        return null;
    }
    
}

function format_transaction_for_table(transactions) {
    if(transactions) {
        return transactions.map(trans => ({transid: trans.account_id, name: trans.name, amount: trans.amount, date: trans.date, category: trans.category, catid: trans.category_id}));
        
    } else {
        return console.log("OH NOOOO");
    }
}

function users(balance, transactions) {
    console.log(balance);
    const numbers = [0, 0, 0, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    
    //ok now we need to go through transactions, maybe get rid of the table function
     const bids = balance.map(acct => 
        <li>{acct.id}</li>
    );
       
    const tids = transactions.map(trans => 
        <li>{trans.catid}</li>
    );
    

    if(balance) { 
        if( bids === tids ){
            console.log ("ywa"); 
        }

        return tids
     }else {
        return listItems;
    }
        // the button works! console.log(data);
    //               )
        
        
    
}



export default function PlaidApp() {

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
    
    

     //Transaction code - NOTE putting the format function prevents it from printing to the screen
    const startDateRef = useRef();
    const endDateRef = useRef();
  
    const [transactions, setTransactions] = useState(null);
    const getTransactionsFunction = () => {
        if(accessToken) {
            axios.post("https://birdboombox.com/api/getTransactions",
                {"access_token": accessToken, "start_date": startDateRef.current.value,
                    "end_date": endDateRef.current.value})
                .then(response => { if(! response.data.error) { 
                    setTransactions(format_transaction_for_table(response.data));
                    
                     
                }});
        }
    };

    
    const numbers = [0, 9, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    
    
    // when going through the balances for each account, you will have an account_id for that account (call it b.account_id)
    // show the transactions for that account:
    // transactions.filter(t => t.account_id === b.account_id)
    // or even format them for a table right now: format_transactions_for_table(transactions.filter(t => t.account_id === b.account_id))

   

    return (
        <>
            <h1>Plaid attempt #100000</h1>
            <h2> Transactions: </h2>
            
            
            <ul>PLPLP {listItems}</ul>
           

            <>
            <B.Button variant="primary" onClick={open}>Connect to Bank</B.Button>

                       


            {accessToken ? (
             <>

                <B.Form.Control type="date" name='start_date' ref={startDateRef} />
                <B.Form.Control type="date" name='end_date' ref={endDateRef} />
                <B.Button variant="secondary" onClick={getTransactionsFunction}>Get Transactions</B.Button>
                
                
                <p> </p>
                <Container style={{color: "red", height: 100}}> 
                    <br></br>
                    <br></br>
                    <h2>Experiment Here</h2>
                    <br></br>
                    
                    {transactions ? (
                        <ul> {users(balance, transactions)} </ul>
                        
                        ) : null } 
                
                    <h3>Balances </h3>
                    {balance ? ( 
                            
                            <B.Table striped border hover>
                            <thead>
                            <tr>
                            <th>Acc ID</th>
                            <th>Name</th>
                            <th>Subtype</th>
                            <th>Current Balance</th>
                            </tr>
                            </thead>

                            <tbody>
                            {balance.map(b => (
                                <tr>
                                    <td>{b.id}</td>
                                    <td>{b.name}</td>
                                    <td>{b.subtype}</td>
                                    <td>{b.balance}</td>
                                </tr>
                            ))}
                            </tbody>
                            <h1> </h1>
                            </B.Table>
                        ) : null}
                    <h3>Transactions</h3>
                    {transactions ? (
                                // <pre>{JSON.stringify(transactions)}</pre>
                                <B.Table striped border hover>
                                <thead>
                                <tr>
                                <th>Trans ID</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Amount</th>
                                </tr>
                                </thead>

                                <tbody>
                                {transactions.map(t => (
                                    <tr>
                                        <td>{t.catid}</td>
                                        <td>{t.date}</td>
                                        <td>{t.name}</td>
                                        <td>{t.category}</td>
                                        <td>{t.amount}</td>
                                    </tr>
                                ))}

                                
                                </tbody>
                                </B.Table>
                            ) : null }
                </Container>

                
            <p> </p>
            <p> </p>
            </>
        ) : null }
        </>

         
        </>
    ); 

    

} 


