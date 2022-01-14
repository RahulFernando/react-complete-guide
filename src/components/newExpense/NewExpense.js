import React from 'react';
import ExpenseForm from './ExpenseForm';

// style
import './style.css';

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;