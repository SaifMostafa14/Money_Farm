import './spendingpage.css';
import * as B from 'react-bootstrap';
import {
    LineChar, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart,
    Pie,
    Cell,
} from 'recharts';
import {Container, Navbar, Table, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";


let globalFood = 0;
let globalTravel = 0;


function totalSum(balance, transactions) {
    console.log(transactions);
    let transCapMap = new Map();
    let bMap = new Map();
    let checkingBal = "";
    let savingBal = "";
    let totsum = 0;
    let moneySpent = 0;
    let travelsum = 0;
    let foodsum = 0;
    let shopsum = 0;
    let recsum = 0;
    let miscsum = 0;

    //loads Plaid values k=name and v=account ID into bMap
    for (const user of balance.Balance.accounts.values()) {
        let k = user.name;
        let v = user.account_id;
        let m = user.balances.available;
        bMap.set(k, v);
        if (k === 'Plaid Checking') {
            checkingBal = m;
            console.log('plaid checl');

        } else if (k === 'Plaid Saving') {
            savingBal = m;
        } else {
            console.log("plaid sav");
        }
        //console.log(user.account_id);

    }
    ;

    for (const t of transactions.values()) {
        let k = t.account_id;
        let v = (t.amount * -1); //posive values are widthdrawls, negative values are deposits -> negate
        let c = t.category;
        let cid = t.category_id;
        let type = t.category_id.substring(0, 3)
        console.log('Trans Date: ' + t.date);

        if (k === bMap.get('Plaid Checking')) {
            totsum = totsum += v;
            switch (type) {
                case '220':
                    travelsum = travelsum += v;
                    console.log('Travel expenses: ' + travelsum);
                    break;

                case '130':
                    foodsum = foodsum += v;
                    console.log('Food expenses: ' + foodsum);
                    break;
                case '190':
                    shopsum = shopsum += v;
                    console.log('Shopping expenses: ' + shopsum);
                    break;

                case '170':
                    recsum = recsum += v;
                    console.log('Recreation expenses: ' + recsum);
                    break;

                case '210' || '160':
                    miscsum = miscsum += v;
                    console.log('Miscellaneous expenses: ' + miscsum);
                    break;

            }

            if (v < 0) {
                moneySpent = moneySpent += v;

            }

        }
        transCapMap.set(c, cid);


    }
    ;console.log(totsum);
    console.log('Money Spent: ' + moneySpent);

    //console.log( 'Testing transCap: ' + transCapMap.values() );

    for (let key of transCapMap.keys()) {
        // console.log('TRansMap keys: ' + key)
    }

    globalFood = foodsum;
    globalTravel = travelsum;

    return (


        //bMap

        <Container id='stuffFromTrans'>
            <div className="row mt-3" id="budget-functions">
                <div className="row mt-3" id="budget-functions">

                    <div className="col-sm" id="budget-col">
                        <div className='alert alert-primary'>
                            <span className='m'> Checking Account Balance: ${checkingBal} </span>
                        </div>
                    </div>

                    <div className='col-sm' id="remaining-col">
                        <div className='alert alert-primary '>
                            <span className='col-sm'> Savings Account Balance: ${savingBal} </span>
                        </div>
                    </div>

                </div>

            </div>

        </Container>


    );


}

function enterData() {

    console.log('GLOBAL Food: ' + globalFood);
    console.log('GLOBAL TRAVEL: ' + globalTravel);
    let globalShopping = 120;
    let globalFun = 100;
    let globalMisc = 70;
    const data = [
        {
            name: 'Food/Eating Out',
            spending: (globalFood * -1),
        },
        {
            name: 'Groceries',
            spending: (globalShopping),
        },
        {
            name: 'Transportation',
            spending: (globalTravel),
        },
        {
            name: 'Entertainment',
            spending: globalFun,
        },
        {
            name: 'Misc.',
            spending: globalMisc,
        },
    ];

    return (

        data

    );
}


function bara(props) {

    return (
        <>
            <div id='spending-css'>
                <Navbar bg="dark" variant="dark" className='nav justify-content-center'>
                    <Container className=''>
                        <Navbar.Brand>GreenPocket</Navbar.Brand>

                        <Link className=" nav nav-pills nav-fill nav-link" to="/budget">Budget</Link>
                        <Link className="nav nav-pills nav-fill nav-link" to="/connect_bank">Conect Bank</Link>
                        <Link className="nav nav-pills nav-fill nav-link" to="/SpendingPage">Spending</Link>

                    </Container>
                </Navbar>
                <h4 className="content-align-center" id="getCategoryTotals">
                    {totalSum(props.balance, props.transactions)}
                </h4>
                <div>

                    {/*<ReactBootStrap.Navbar bg="success" variant="dark">*/}
                    {/*    <ReactBootStrap.Container>*/}
                    {/*        <ReactBootStrap.Navbar.Brand href="#home">GreenPocket</ReactBootStrap.Navbar.Brand>*/}
                    {/*        <ReactBootStrap.Nav className="me-auto">*/}
                    {/*            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>*/}
                    {/*            <ReactBootStrap.Nav.Link href="#features">logout</ReactBootStrap.Nav.Link>*/}
                    {/*        </ReactBootStrap.Nav>*/}
                    {/*    </ReactBootStrap.Container>*/}
                    {/*</ReactBootStrap.Navbar>*/}

                    {/*<div id="spending-card">*/}

                    {/*    <p id="spending-p"> Current Spending</p>*/}

                    {/*    <h1 id="spending-h1">$5432.12</h1>*/}


                    {/*</div>*/}

                </div>
                <div id='spending-barr'>
                    <ResponsiveContainer classNmae='content-align-center' aspect={1.5}>
                        <BarChart
                            width={250}
                            height={80}
                            data={enterData()}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={30}
                        >
                            <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Bar dataKey="spending" fill="green" background={{fill: 'gray'}}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>


                {/*<div id='spending-pie'>
                    <ResponsiveContainer width="95%" aspect={2}>
                        <PieChart width={70} height={90}>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                        </PieChart>
                                </ResponsiveContainer>


                                </div>*/}

                <div id='spending-table-div'>
                    <Container className='col-12 col-lg-8 col-xxl-9 d-flex my-4' id='spending-table'>
                        <Card border="dark" style={{width: '70rem'}} id='spending-table-card'>
                            <Card.Header as='h4'>Recent Transactions
                                <Container id="transaction-table-container">
                                    <B.Form.Control type="date" name='start_date' value={props.startDate}
                                                    onChange={e => props.setStartDate(e.target.value)}/>
                                    <B.Form.Control type="date" name='end_date' value={props.endDate}
                                                    onChange={e => props.setEndDate(e.target.value)}/>

                                    <B.Button variant="secondary" onClick={props.getTransactionsFunction}>Get
                                        Transactions</B.Button>
                                </Container>

                            </Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Transaction</th>
                                        <th>Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.transactions.map(t => (
                                        <tr>
                                            <td>{t.date}</td>
                                            <td>{t.name}</td>
                                            <td>{t.category}</td>
                                            <td>{t.amount}</td>
                                        </tr>
                                    ))}

                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>

                    </Container>
                </div>
            </div>
        </>
    );
}

export default bara;
