import React, { useState } from 'react';
import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense_title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expense_date={props.expense_date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expense_amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
