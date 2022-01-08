import React from 'react';
import './style.css';

function ExpenseItem(props) {
  const  month = props.expense_date.toLocaleString('en-US', { month: 'long' });
  const day = props.expense_date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expense_date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.expense_title}</h2>
        <div className="expense-item__price">${props.expense_amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
