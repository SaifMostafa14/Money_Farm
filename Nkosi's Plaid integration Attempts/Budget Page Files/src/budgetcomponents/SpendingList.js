import React, {useContext} from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';



function users(balance) {
  console.log(balance);
  let bMap = new Map();
  let checkingBal = "" ;
  let savingBal = "" ;
       
  //loads Plaid values k=name and v=account ID into bMap
  for (const user of balance.Balance.accounts.values()) {
      let k = user.name;
      let v = user.account_id;
      let m = user.balances.available;
      bMap.set(k, v);
      if(k === 'Plaid Checking'){
          checkingBal = m;
          console.log('plaid checl');

      }else if(k === 'Plaid Saving'){
          savingBal = m;
      }else{
          console.log("plaid sav");
      }
      //console.log(user.account_id);

    }
    
    //prints plaid's checking id to console
    console.log(bMap.get('Plaid Checking'));
 
  return(
      //bMap
      //prints plaid's checking id to page
      //bMap.get('Plaid Checking')
      <Container className="row g-2 mb-2" id = 'stuffFromBalance'>
               
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

      </Container>
      
      
  );
       
}


const SpendingList = (props) =>{
  return(
    <div className="">
      <h4 className="content-align-center" id="getCategoryTotals" >
           {users(props.balance)}
        </h4>

    </div>

  );

};

export default SpendingList;
