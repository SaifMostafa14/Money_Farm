import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../budgetcontext/AppContext';

const ExpenseList =() =>{
  const {expenses} = useContext(AppContext);
  
  return(
    <ul className= 'list-group'>
      {expenses.map( (expense) =>(
        <ExpenseItem 
            id={expense.id}
            name={expense.name} 
            cost={expense.price} 
        />


      ))}

    </ul>
  );


};

export default ExpenseList;