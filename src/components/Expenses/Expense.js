import React, { useState } from 'react'
import ExpensesChart from './ExpensesChart'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

const Expense = (props) => { 
  const [filteredYear,setFilteredYear]= useState('2022');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear); 
  };

  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <div className='expenses'>
      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense}/>
    </div>
  )
}


export default Expense