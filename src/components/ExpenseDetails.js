import React, { createElement } from 'react'

export default function ExpenseDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.loc}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  )
  // return React.createElement('div',{},
  //   React.createElement('h2',null,{props.title}),
  //   React.createElement('h2',{},{props.loc}),
  //   React.createElement('div',{className="expense-item__price"},{props.amount})
  
  // )
}
