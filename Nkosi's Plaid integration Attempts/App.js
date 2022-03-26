import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Button, Table, Accordion, Carousel, Container } from 'react-bootstrap';
import { usePlaidLink } from 'react-plaid-link';
import * as B from 'react-bootstrap';
const axios = require('axios');


//Puts balance in table
function format_balance_for_table(balance) {
    if(balance) {
        return balance.Balance.accounts.map(acct => ({name: acct.name, type: acct.type, subtype: acct.subtype, balance: acct.balances.current}));
    } else {
        return null;
    }
}

function format_transaction_for_table(transactions) {
    if(transactions) {
        return transactions.map(trans => ({name: trans.name, amount: trans.amount, date: trans.date, category: trans.category, pending: trans.pending}));
        //console.log("It Worked");
        //transactions.Transactions.map(trans => ({name: trans.name, amount: trans.amount, date: trans.date, category: trans.category}));
    } else {
        return console.log("OH NOOOO");
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

 

    //Transaction code - NOTE putting the format function prevents it from printing to the screen
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

  /*  
    return (
        <>
            <h1>Plaid attempt #100000</h1>

            <Button variant="primary" onClick={() => open()}>Click me</Button>

            <p> </p>
            <p> </p>
            <Container style={{color: "red", height: 10}}> 
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://external-preview.redd.it/FF6jEX5JjSiDIBpPNuBUblL9XP-MXS5fyrfiwp3Jq9g.jpg?width=640&crop=smart&auto=webp&s=798bf46b07f0667e74a42f0e5a7e3bdbc50e90b5"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.kym-cdn.com/photos/images/facebook/002/187/498/b8a.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://preview.redd.it/ugb48lg15wj71.png?width=640&crop=smart&auto=webp&s=97bac9183e8f394230ceb91d2220cd8c5615264b"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            
            
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Balance Table</Accordion.Header>
                    <Accordion.Body>
                        {balance ? (
                        <Table striped border hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Subtype</th>
                                <th>Current Balance</th>
                            </tr>
                            </thead>
                            <tbody>
                            {balance.map(b => (
                                <tr>
                                    <td>{b.name}</td>
                                    <td>{b.type}</td>
                                    <td>{b.subtype}</td>
                                    <td>{b.balance}</td>
                                    </tr>
                            ))}
                            </tbody>
                        </Table>
                        ) : null}
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Transactions Table</Accordion.Header>
                    <Accordion.Body>
                    {balance ? (
                        <Table striped border hover>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Category</th>
                            </tr>
                            </thead>
                            <tbody>
                            {balance.map(b => (
                                <tr>
                                    <td>{b.name}</td>
                                    <td>{b.type}</td>
                                    <td>{b.subtype}</td>
                                    <td>{b.balance}</td>
                                    </tr>
                            ))}
                            </tbody>
                        </Table>
                        ) : null}
                                
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Container>

            
        <p> </p>
        <p> </p>

         
        </>
    ); 



    return (
        <>
        <B.Button variant="primary" onClick={open}>Connect to Bank</B.Button>
        {accessToken ? (
            <>

                
                <B.Form.Control type="date" name='start_date' ref={startDateRef} />
                <B.Form.Control type="date" name='end_date' ref={endDateRef} />
                <B.Button variant="secondary" onClick={getTransactionsFunction}>Get Transactions</B.Button>
                {balance ? (
                    <B.Table striped border hover>
                    <thead>
                    <tr>
                       <th>Name</th>
                       <th>Type</th>
                       <th>Subtype</th>
                       <th>Current Balance</th>
                    </tr>
                    </thead>

                    <tbody>
                    {balance.map(b => (
                        <tr>
                            <td>{b.name}</td>
                            <td>{b.type}</td>
                            <td>{b.subtype}</td>
                            <td>{b.balance}</td>
                        </tr>
                    ))}
                    </tbody>
                    </B.Table>
                ) : null}
                {transactions ? (
                   // <pre>{JSON.stringify(transactions)}</pre>
                    <B.Table striped border hover>
                    <thead>
                    <tr>
                       <th>Date</th>
                       <th>Name</th>
                       <th>Category</th>
                       <th>Pending?</th>
                       <th>Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {transactions.map(t => (
                        <tr>
                            <td>{t.date}</td>
                            <td>{t.name}</td>
                            <td>{t.category}</td>
                            <td>{t.pending}</td>
                            <td>{t.amount}</td>
                        </tr>
                    ))}

                    
                    </tbody>
                    </B.Table>
                ) : null }
            </>
        ) : null }
        </>
    ); 


    */

    return (
        <>
            <h1>Plaid attempt #100000</h1>

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
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://external-preview.redd.it/FF6jEX5JjSiDIBpPNuBUblL9XP-MXS5fyrfiwp3Jq9g.jpg?width=640&crop=smart&auto=webp&s=798bf46b07f0667e74a42f0e5a7e3bdbc50e90b5"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.kym-cdn.com/photos/images/facebook/002/187/498/b8a.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://preview.redd.it/ugb48lg15wj71.png?width=640&crop=smart&auto=webp&s=97bac9183e8f394230ceb91d2220cd8c5615264b"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                
                
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Balance Table</Accordion.Header>
                        <Accordion.Body>
                        {balance ? (
                            <B.Table striped border hover>
                            <thead>
                            <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Subtype</th>
                            <th>Current Balance</th>
                            </tr>
                            </thead>

                            <tbody>
                            {balance.map(b => (
                                <tr>
                                    <td>{b.name}</td>
                                    <td>{b.type}</td>
                                    <td>{b.subtype}</td>
                                    <td>{b.balance}</td>
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
                            // <pre>{JSON.stringify(transactions)}</pre>
                            <B.Table striped border hover>
                            <thead>
                            <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Pending?</th>
                            <th>Amount</th>
                            </tr>
                            </thead>

                            <tbody>
                            {transactions.map(t => (
                                <tr>
                                    <td>{t.date}</td>
                                    <td>{t.name}</td>
                                    <td>{t.category}</td>
                                    <td>{t.pending}</td>
                                    <td>{t.amount}</td>
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

