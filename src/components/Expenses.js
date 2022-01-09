import React from 'react';
import ExpenseItem from './ExpenseItem';
import './style.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense_date={expense.expense_date}
          expense_title={expense.expense_title}
          expense_amount={expense.expense_amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
