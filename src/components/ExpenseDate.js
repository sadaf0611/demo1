import React from 'react'

export default function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const Day=props.date.toLocaleString('en-US',{day:'2-digit'});
    // const Year=props.date.toLocaleString('en-US',{year:'numeric'});
    const Year=props.date.getFullYear();
  return (
    <div>
        <div>{month}</div>
        <div>{Year}</div>
        <div>{Day}</div>
    </div>
  )
}
