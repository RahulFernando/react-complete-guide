import React from 'react';
import ExpenseForm from './ExpenseForm';

// style
import './style.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toPrecision()
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveData={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;