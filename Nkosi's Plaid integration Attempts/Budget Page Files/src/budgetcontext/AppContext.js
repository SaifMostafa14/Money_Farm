import { createContext, useReducer } from "react";

const AppReducer = (state, action) =>{
  switch(action.type){
     case 'ADD_EXPENSE':
      return{
        ...state, 
        expenses: [...state.expenses, action.payload],
      };

      case 'DELETE_EXPENSE':
      return{
        ...state, 
        expenses: state.expenses.filter((expense) => expense.id !== action.payload) ,
      };

    default: 
      return state;
    

  }
}

const initalState = {
  budget: 10000,
  expenses: [
    {id: 14, name: "Shopping", price:50},
    {id: 15, name: "Grocery", price:40},
    {id: 16, name: "Leisure", price:476},
  ],

};

export const AppContext = createContext();

export const AppProvider = (props) =>{
  const [state, dispatch] = useReducer(AppReducer, initalState);
  return (<AppContext.Provider value={ {

    budget: state.budget,
    expenses: state.expenses,
    dispatch,
  }}
  >
    {props.children}
  </AppContext.Provider>
  );
}

