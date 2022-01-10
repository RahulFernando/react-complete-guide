import React from 'react';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import '../style.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense_date={expense.expense_date}
          expense_title={expense.expense_title}
          expense_amount={expense.expense_amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
