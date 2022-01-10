import React from 'react';

const ExpenseDate = (props) => {
  const month = props.expense_date.toLocaleString('en-US', { month: 'long' });
  const day = props.expense_date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expense_date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  );
}

export default ExpenseDate;
