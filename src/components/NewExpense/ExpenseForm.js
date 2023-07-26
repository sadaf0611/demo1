import React, {useState} from 'react'
import ExpenceItem from '../Expenses/ExpenceItem'
import './NewExpense.css'

const  ExpenseForm = (props) =>
{
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
  const [enteredLocation,setEnteredLocation]=useState('');
  const [enteredAmount,setEneterdAmount]=useState('');
  // const [userInput,setUserInput] =useState({
  //   enteredDate: '',
  //   enteredTitle: '',
  //   enteredLocation:'',
  //   EneterdAmount:'',
  // })
  
  const DateChange = (event) =>{
    setEnteredDate(event.target.value);
  };
  const TitleChange = (event) =>{
    setEnteredTitle(event.target.value);
  };
  const LocationChange = (event) =>{
    setEnteredLocation(event.target.value);
  };
  const AmountChange = (event) =>{
    setEneterdAmount(event.target.value);
  };

  const submitHandler = (event) =>{ 
    event.preventDefault();

      const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        location:enteredLocation,
      }
    props.onSaveExpenseData(expenseData);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredLocation('');
    setEneterdAmount('');
  };

  return (
    <div className='add-expense'>
      <h2>Add Expense</h2>
      <form onSubmit={submitHandler}>
        <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' placeholder='date' id='date'onChange={DateChange}/>
        <input type='text' value={enteredTitle} placeholder='title' id='title' onChange={TitleChange}/>
        <input type='text' value={enteredLocation} placeholder='location' id='location' onChange={LocationChange}/>
        <input type='number' value={enteredAmount} placeholder='amount' id='amount' onChange={AmountChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default ExpenseForm