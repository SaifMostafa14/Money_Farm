import React, {useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { AppContext } from '../budgetcontext/AppContext';
import {Button} from 'react-bootstrap';

const AddExpenseForm = () => {
  const {dispatch} = useContext(AppContext);
  const [name, setName] = useState( '');
  const [price, setPrice] = useState ('');

  const onSubmit = (event) =>{
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      price: parseInt(price),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    
  }
  return (
  <form onSubmit={onSubmit}>
    <div className='row'>
      <div className='col-sm'>
        <label for='name'>Name</label>
        <input 
          required='required' 
          type='text'
          className='form-control'
          id='name'
          value={name}
          onChange = { (event) => setName(event.target.value)}  
          >
            
         </input>
      </div>

      <div className='col-sm'>
        <label for='price'>Price</label>
        <input 
          required='required' 
          type='text'
          className='form-control'
          id='price'
          value={price}
          onChange = { (event) => setPrice(event.target.value)}
          >
         </input>
      </div>
      
      <div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>Save
					</button>
				</div>
			</div>
    </div>
  </form>
  );
}

export default AddExpenseForm;
