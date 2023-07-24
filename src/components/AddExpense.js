import React, {useState} from 'react'
import ExpenceItem from './ExpenceItem'
import './ExpenceItem.css'
export default function AddExpense() {

  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
  const [enteredLocation,setEnteredLocation]=useState('');
  const [eneterdAmount,setEneterdAmount]=useState('');
  // const [userInput,setUserInput] =useState({
  //   enteredDate: '',
  //   enteredTitle: '',
  //   enteredLocation:'',
  //   EneterdAmount:'',
  // })
  
  const DateChange = (event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value};
    // });
    setEnteredDate(event.target.value);
  };

  
  const TitleChange = (event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    setEnteredTitle(event.target.value);
  };

  
  const LocationChange = (event) =>{
  //   setUserInput({
  //     ...userInput,
  //     enteredLocation: event.target.value,
  //   })
  setEnteredLocation(event.target.value);
  };

  
  // const [amountChange, setAmountChange] = useState('')
  const AmountChange = (event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredAmont: event.target.value,
    // })
    setEneterdAmount(event.target.value);
  };

const submitHandler = (event) =>{ 
  event.preventDefault();

  const expenseData={
    title:enteredTitle,
    amount:eneterdAmount,
    date:new Date(enteredDate),
    location:enteredLocation,
  }
  console.log(expenseData);
 };

  return (
    <div className='add-expense'>
      <h2>Add Expense</h2>
      <form onSubmit={submitHandler}>
        <input type='date' min='2019-01-01' max='2022-12-31' placeholder='date' id='date'onChange={DateChange}/>
        <input type='text' placeholder='title' id='title' onChange={TitleChange}/>
        <input type='text' placeholder='location' id='location' onChange={LocationChange}/>
        <input type='number' placeholder='amount' id='amount' onChange={AmountChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
