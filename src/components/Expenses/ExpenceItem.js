import React, {useState} from 'react'
import './ExpenceItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'


const ExpenceItem = (props) => {

  // const [title,setTitle]=useState(props.title);
  const [amount,setAmount]=useState(props.amount);
  const clickHandler = () =>{
    // setTitle('updated');
    setAmount(amount+100);
    // console.log(title);
  };
  
  return (
    <li>
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          {/* <ExpenseDetails title={props.title} loc={props.loc} amount={props.amount} /> */}
            <h2>{props.title}</h2>
            <h2>{props.loc}</h2>
            <div className='expense-item__price'>${amount}</div>
          <button onClick={clickHandler}>Add $100 to amount</button>  
        </div>
          
    </div>
    </li>
  )
}
export default ExpenceItem  