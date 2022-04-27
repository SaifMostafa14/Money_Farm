import React, {useContext} from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
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
                                <span className='my-4 col-sm'> Remaining in Checking Account: ${totsum} </span>
                        </div>
                    </div>
              
                    <div className='col-sm' id="remaining-col">
                        <div className='alert alert-danger'>
                                <span className='my-4 col-sm'> Total Spent from Checking Account: ${moneySpent} </span>
                        </div>
                    </div>
                    <h1> {travelsum}</h1>
              
                    </div>         

      </Container>
      

      
  );
     
 
  
};

const BudgetList = (props) =>{
  
      return(
    <div>
        <h4 className="content-align-center" id="getCategoryTotals" >
           {totalSum(props.balance, props.transactions)}
        </h4>


      <div className="container-fluid">
        <div className="row g-6 mb6">
          <div className="col-xl-3 col-sm-6 col-12">
            <Card id="travelExpenses">
              <Card.Body>
                <Row id="budgetRow">
                  <Col>
                    <span className="h6 text-muted text-sm d-block mb-2">$$ Travel Budget</span>
                    <span className="h3 font-bold mb-0">$900</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-compass-fill" id="bi-cons" fill="pink" style={{ fontSize: 50 }} > 
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
                    <span className="h3 font-bold mb-0">$100</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-cart-fill" id="bi-cons" fill="pink" style={{ fontSize: 50 }} > 
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
                    <span className="h3 font-bold mb-0">$150</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-handbag-fill" id="bi-cons" fill="pink" style={{ fontSize: 50 }} > 
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
                    <span className="h3 font-bold mb-0">$200</span>
                  </Col>
                  <Col className="col-auto">
                    <i className="bi bi-camera-fill" id="bi-cons" fill="pink" style={{ fontSize: 50 }} > 
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
