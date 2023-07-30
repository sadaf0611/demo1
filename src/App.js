import ExpenceItem from './components/Expenses/ExpenceItem';
import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/NewExpense/ExpenseForm'
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';

const DUMMY_EXPENSE=[
  {
    id:'e1',
    title:'car Insuranse',
    amount:200,
    LocEx:'Pune',
    date: new Date(2019,7,14),
  },
  {
    id:'e2',
    title:'Bike Insuranse',
    amount:100,
    LocEx:'Mumbai',
    date: new Date(2021,8,14),
  },
  {
    id:'e3',
    title:'Home Insuranse',
    amount:300,
    LocEx:'Hydrabad',
    date: new Date(2022,9,14),
  },
  {
    id:'e4',
    title:'Life Insuranse',
    amount:300,
    LocEx:'Hydrabad',
    date: new Date(2022,9,14),
  },
];

const App = () =>{
  
    // const [expenses,setExpenses]=useState(DUMMY_EXPENSE);
  
    // const addExpenseHandler = expense =>{
    //   setExpenses(prevExpenses =>{
    //     return [expense,...expenses];
    //   });
    // }
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = newExpense =>{
      setExpenses(prevExpenses => {
        return [newExpense,...expenses];
      });
      console.log(expenses);
    }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        
        <Expense items={expenses}/>
      {/* { 
        // for 100 expense we can apply same loop.
        expenses.map((ele)=>{
          return <ExpenceItem title={ele.title} loc={ele.LocEx} amount={ele.amount} date={ele.date}/>
        })
      } */}
      
    </div>
  );
}

export default App;
