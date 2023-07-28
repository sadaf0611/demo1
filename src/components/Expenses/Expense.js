import React, { useState } from 'react'
import ExpenceItem from './ExpenceItem'
import ExpenseFilter from './ExpenseFilter'


const Expense = (props) => { 
  const [filteredYear,setFilteredYear]= useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };
  return (
    <div className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenceItem title={props.items[0].title} loc={props.items[0].LocationOfExpenditure} amount={props.items[0].amount} date={props.items[0].date}/> 
      <ExpenceItem title={props.items[1].title} loc={props.items[1].LocationOfExpenditure} amount={props.items[1].amount} date={props.items[1].date}/>
      <ExpenceItem title={props.items[2].title} loc={props.items[2].LocationOfExpenditure} amount={props.items[2].amount} date={props.items[2].date}/>
      <ExpenceItem title={props.items[2].title} loc={props.items[2].LocationOfExpenditure} amount={props.items[3].amount} date={props.items[3].date}/>
    </div>
  )
}


export default Expense