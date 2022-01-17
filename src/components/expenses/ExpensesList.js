import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length === 0 ) {
       return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    return (
       <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense_date={expense.expense_date}
            expense_title={expense.expense_title}
            expense_amount={expense.expense_amount}
          />
        ))}
       </ul>
    );
}

export default ExpensesList;