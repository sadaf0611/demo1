import ExpenceItem from './components/Expenses/ExpenceItem';
import './App.css';
import React, { createElement } from 'react';
import ExpenseForm from './components/NewExpense/ExpenseForm'
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';
function App() {
  const expenses=[
    {
      id:'e1',
      title:'car Insuranse',
      amount:200,
      LocationOfExpenditure:'Pune',
      date: new Date(2020,7,14),
    },
    {
      id:'e2',
      title:'Bike Insuranse',
      amount:100,
      LocationOfExpenditure:'Mumbai',
      date: new Date(2021,8,14),
    },
    {
      id:'e3',
      title:'Home Insuranse',
      amount:300,
      LocationOfExpenditure:'Hydrabad',
      date: new Date(2022,9,14),
    },
    {
      id:'e4',
      title:'Life Insuranse',
      amount:300,
      LocationOfExpenditure:'Hydrabad',
      date: new Date(2022,9,14),
    },
  ]

  const addExpenseHandler = expense =>{
    console.log('in app.js file');
    console.log(expense) ;
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense items={expenses}/>
      {/* {
        // for 100 expense we can apply same loop.
        expenses.map((ele)=>{
          return <ExpenceItem title={ele.title} loc={ele.LocationOfExpenditure} amount={ele.amount} date={ele.date}/>
        })
      } */}
      
    </div>
  );
}

export default App;
