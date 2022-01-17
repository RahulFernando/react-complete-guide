import React, { useState } from 'react';
import Card from '../ui/Card';
import '../style.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [year, setYear] = useState('2019');

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filtered = props.expenses.filter(
    (expense) => expense.expense_date.getFullYear() === parseInt(year)
  );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onYearChange={yearChangeHandler} />
        <ExpensesList items={filtered} />
      </Card>
    </>
  );
};

export default Expenses;
