import React from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'ex1',
      expense_date: new Date(2021, 2, 28),
      expense_title: 'Car Insurance',
      expense_amount: 294.67,
    },
    {
      id: 'ex2',
      expense_date: new Date(2021, 2, 29),
      expense_title: 'Class Fee',
      expense_amount: 500.0,
    },
    {
      id: 'ex3',
      expense_date: new Date(2021, 2, 29),
      expense_title: 'Medical Insurance',
      expense_amount: 290.3,
    },
  ];

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(
  //     'h2',
  //     {},
  //     "Let's get started!",
  //   ),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
