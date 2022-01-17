import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

// style
import './style.css';

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const saveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toPrecision(),
    };

    props.onAddExpense(expenseData);
  };

  const visibilityHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className="new-expense">
      {!visible && (
        <button type="button" onClick={visibilityHandler}>
          Add New Expense
        </button>
      )}
      {visible && (
        <ExpenseForm
          onSaveData={saveExpenseHandler}
          onCancel={visibilityHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
