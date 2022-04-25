import React, {useContext} from 'react';
import { AppContext } from '../budgetcontext/AppContext';

const ExpenseTotal =() => {
  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item)=>{
    return (total += item.price);
  }, 0); 

  return(
    <div className = "alert alert-primary">
      <span> Spent so far: ${totalExpenses}</span>

    </div>
  )
}

export default ExpenseTotal;