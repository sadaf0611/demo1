import React from 'react'
import './ExpenceItem.css'

export default function ExpenceItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle='Car Insuranse'
    // const expenseAmount=294.86;
    // const LocationOfExpenditure='Pune'
  return (
    <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.loc}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            
        </div>
  
    </div>
  )
}
