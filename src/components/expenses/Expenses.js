import React, { useState } from 'react';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import '../style.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2019');

  const yearChangeHandler = (year) => {
    setYear(year);
  };
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onYearChange={yearChangeHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense_date={expense.expense_date}
            expense_title={expense.expense_title}
            expense_amount={expense.expense_amount}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
