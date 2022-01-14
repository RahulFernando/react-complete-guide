import React from 'react';
import { useState } from 'react/cjs/react.development';

const ExpenseForm = (props) => {
  const obj = { title: '', amount: 0.01, date: Date.now() };
  const [values, setValues] = useState(obj);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setValues(obj);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={values.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={values.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
