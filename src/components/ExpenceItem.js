import React from 'react'
import './ExpenceItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
export default function ExpenceItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle='Car Insuranse'
    // const expenseAmount=294.86;
    // const LocationOfExpenditure='Pune'
   
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <ExpenseDetails title={props.title} loc={props.loc} amount={props.amount} />
            {/* <h2></h2>
            <h2></h2>
            <div className='expense-item__price'>$</div>
             */}
        </div>
  
    </div>
  )
}
