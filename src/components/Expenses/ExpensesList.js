import React from 'react'
import ExpenceItem from './ExpenceItem';
import './ExpenceItem.css'

const ExpensesList = (props) => {
        if(props.items.length===0){
         return <h2 className='expense-list__fallback'>Found no expense</h2>
        }
  return (
    <div>
      <ul className='expense-list'>
        {props.items.map((expense)=>(    
            <ExpenceItem  
            key = {expense.id}
            title={expense.title} 
            loc={expense.LocEx} 
            amount={expense.amount} 
            date={expense.date}  />
        ))}
        </ul>
    </div>
  )
}

export default ExpensesList

