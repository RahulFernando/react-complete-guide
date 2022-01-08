import React from 'react';
import './style.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.expense_date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense_title}</h2>
        <div className="expense-item__price">${props.expense_amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
