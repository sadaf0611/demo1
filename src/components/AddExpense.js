import React, {useState} from 'react'
import ExpenceItem from './ExpenceItem'
import './ExpenceItem.css'
export default function AddExpense() {

  const [userInput,setUserInput] =useState({
    enteredDate: '',
    enteredTitle: '',
    enteredLocation:'',
    EneterdAmount:'',
  })
  
  const DateChange = (event) =>{
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
  };

  
  const TitleChange = (event) =>{
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
  };

  
  const LocationChange = (event) =>{
    setUserInput({
      ...userInput,
      enteredLocation: event.target.value,
    })
  };
  
  // const [amountChange, setAmountChange] = useState('')
  const AmountChange = (event) =>{
    setUserInput({
      ...userInput,
      enteredAmont: event.target.value,
    })
  };








  return (
    <div className='add-expense'>
      <h2>Add Expense</h2>
      <form>
        <input type='date' min='2019-01-01' max='2022-12-31' placeholder='date' id='date'onChange={DateChange}/>
        <input type='text' placeholder='title' id='title' onChange={TitleChange}/>
        <input type='text' placeholder='location' id='location' onChange={LocationChange}/>
        <input type='number' placeholder='amount' id='amount' onChange={AmountChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
