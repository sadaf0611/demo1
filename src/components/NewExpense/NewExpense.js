import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {


  const [isEditing, setIsEditing]=useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const startEditingHandler = () =>{
      setIsEditing(true);
    }
    const stopEditingHandler = ()=>{
      setIsEditing(false);
    }
  return (
    <div className='anam'>
      {!isEditing && <button className='btn1' onClick={startEditingHandler}>Add New Expense</button>}
  {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/> }
    </div>
  )
}
export default NewExpense;