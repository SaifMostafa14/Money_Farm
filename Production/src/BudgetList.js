import React, {useContext} from 'react';
import {Card, Row, Col, Container, Button, Form} from 'react-bootstrap';
import { LineChar, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart,
  Pie,
  Cell, } from 'recharts';
// import '../BudgetPage.css'

function totalSum(balance, transactions) {
  console.log( transactions);
  let transCapMap = new Map();
  let bMap = new Map();
  let totsum =0;
  let moneySpent = 0;
  let travelsum =0;
  let foodsum=0;
  let shopsum=0;
  let recsum=0;
   
  for (const user of balance.Balance.accounts.values()) {
      let k = user.name;
      let v = user.account_id;
      bMap.set(k, v);
      //console.log(user.account_id);

    }
  for (const t of transactions.values()) {
      let k = t.account_id;
      let v = (t.amount * -1); //posive values are widthdrawls, negative values are deposits -> negate
      let c = t.category;
      let cid = t.category_id;
      let type = t.category_id.substring(0,3)
      console.log('Trans Date: ' + t.date);
      
      if(k === bMap.get('Plaid Checking')){
          totsum = totsum += v;
          switch(type){
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
                 
          }

          if(v < 0){
              moneySpent = moneySpent += v;
              
          }

      }
      transCapMap.set(c, cid);
      

    }console.log(totsum);console.log('Money Spent: ' + moneySpent);
    
   //console.log( 'Testing transCap: ' + transCapMap.values() );

    for (let key of transCapMap.keys()){
        // console.log('TRansMap keys: ' + key)
    }
  
  return(
      
      //bMap
      <Container id = 'stuffFromTrans'>
          <div className="row mt-3" id="budget-functions">
                    
                    <div className="col-sm" id="budget-col">
                        <div className='alert alert-success'>
                                <span className='my-4 col-sm'> Remaining in Budget: ${totsum.toFixed(2)} </span>
                        </div>
                    </div>
              
                    <div className='col-sm' id="remaining-col">
                        <div className='alert alert-danger'>
                                <span className='my-4 col-sm'> Total Spent from Budget: ${moneySpent.toFixed(2)} </span>
                        </div>
                    </div>
              
                    </div>         

      </Container>
      

      
  );
     
 
  
};




const BudgetList = (props) =>{
  let travelBudget = 900;
  let shopBudget = 200;
  let foodBudget = 300;
  let funBudget = 100;
  let totalBudget = travelBudget + shopBudget + foodBudget + funBudget;

  const data2 = [
    {name: 'Travel', value: travelBudget},
    {name: 'Groceries', value: shopBudget},
    {name: 'Food', value: foodBudget},
    {name: 'Leisure', value: funBudget},
];


const COLORS = ['#daa520', '#f08080', '#6495ed', '	#48d1cc',];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


      return(
    <div>
      <Container className='py-5' id='new-user container'>
                <h1 className='fw-bold'>Let's start saving!</h1>
                <p className='col-md-8'>
                    We reccomend following the 50/30/20 rule when budgeting: 50% for necesseties, 30% for wants, and 20% just in case
                </p>
                
            </Container>
        <h4 className="content-align-center" id="getCategoryTotals" >
           {totalSum(props.balance, props.transactions)}
        </h4>

          <div id='budget-pie'>
            <Container>
                    <ResponsiveContainer  width="95%" aspect={3}>
                        <PieChart width={60} height={80}>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={170}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data2.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                        </PieChart>
                      </ResponsiveContainer>
              </Container>


                                </div>


      <div className="container-fluid">
        <div className="row g-6 mb6">
          <div className="col-xl-3 col-sm-6 col-12">
            <Card id="travelExpenses">
              <Card.Body>
                <Row id="budgetRow">
                  <Col>
                    <span className="h6 text-muted text-sm d-block mb-2">$$ Travel Budget</span>
                    <span className="h3 font-bold mb-0">${travelBudget}</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-compass-fill" id="bi-cons" fill="pink" style={{ fontSize: 50, color:'goldenrod' }} > 
                    </i>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <Card id="shoppingExpenses">
              <Card.Body>
                <Row id="budgetRow">
                  <Col>
                    <span className="h6 text-muted text-sm d-block mb-2">$$ Grocery Budget</span>
                    <span className="h3 font-bold mb-0">${shopBudget}</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-cart-fill" id="bi-cons" fill="pink" style={{ fontSize: 50, color: '	lightcoral' }} > 
                    </i>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <Card id="foodExpenses">
              <Card.Body>
                <Row id="budgetRow">
                  <Col>
                    <span className="h6 text-muted text-sm d-block mb-2">$$ Food Budget</span>
                    <span className="h3 font-bold mb-0">${foodBudget}</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-handbag-fill" id="bi-cons" fill="pink" style={{ fontSize: 50, color: '	cornflowerblue' }}> 
                    </i>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <Card id="recExpenses">
              <Card.Body>
                <Row id="budgetRow">
                  <Col>
                    <span className="h6 text-muted text-sm d-block mb-2">$$ Leisure Budget</span>
                    <span className="h3 font-bold mb-0">${funBudget}</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-camera-fill" id="bi-cons" fill="pink" style={{ fontSize: 50, color: 'mediumturquoise' }}> 
                    </i>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
          </div>
        </div>
      </div>
      
</div>

    );
}


export default BudgetList;
