import React, { useState } from 'react'
import ExpenceItem from './ExpenceItem'
import ExpenseFilter from './ExpenseFilter'


const Expense = (props) => { 
  const [filteredYear,setFilteredYear]= useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear); 
  };

  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  let expensesContent =   <p>NO data available</p>;
  if(filteredExpense.length>0){
     expensesContent=(filteredExpense.map((expense)=>(
        
      <ExpenceItem  
      key = {expense.id}
      title={expense.title} 
      loc={expense.LocEx} 
      amount={expense.amount} 
      date={expense.date}  />
    )
  ));
  }

  return (
    <div className='expenses'>
      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/>
      
      {expensesContent}  
    </div>
  )
}


export default Expense