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
      {props.items.map((expense)=>(
      <ExpenceItem  
          key = {expense.id}
          title={expense.title} 
          loc={expense.LocEx} 
          amount={expense.amount} 
          date={expense.date}  />
      ))}

      {/* <ExpenceItem title={props.items[0].title} loc={props.items[0].LocEx} amount={props.items[0].amount} date={props.items[0].date}/> 
      <ExpenceItem title={props.items[1].title} loc={props.items[1].LocEx} amount={props.items[1].amount} date={props.items[1].date}/>
      <ExpenceItem title={props.items[2].title} loc={props.items[2].LocEx} amount={props.items[2].amount} date={props.items[2].date}/>
      <ExpenceItem title={props.items[2].title} loc={props.items[2].LocEx} amount={props.items[3].amount} date={props.items[3].date}/> */}
    </div>
  )
}


export default Expense