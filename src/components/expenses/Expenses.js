import React, { useState } from 'react';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import '../style.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2019');
  let expensesContent = <p>No Expense Found on {year}</p>

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filtered = props.expenses.filter(
    (expense) => expense.expense_date.getFullYear() === parseInt(year)
  );

  if (filtered.length > 0 ) {
    expensesContent = filtered.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expense_date={expense.expense_date}
        expense_title={expense.expense_title}
        expense_amount={expense.expense_amount}
      />
    ))
  }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onYearChange={yearChangeHandler} />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
