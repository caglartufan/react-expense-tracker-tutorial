import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancelExpenseData }) => {
    const initialUserInput = {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    };

    const [userInput, setUserInput] = useState(initialUserInput);

    const titleChangeHandler = event => {
        setUserInput(previousUserInput => {
            return {
                ...previousUserInput,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = event => {
        setUserInput(previousUserInput => {
            return {
                ...previousUserInput,
                enteredAmount: event.target.value
            };
        });
    };

    const dateChangeHandler = event => {
        setUserInput(previousUserInput => {
            return {
                ...previousUserInput,
                enteredDate: event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        onSaveExpenseData(expenseData);

        setUserInput(initialUserInput);

        onCancelExpenseData();
    };

    const resetHandler = () => {
        onCancelExpenseData();
    };

    return (
        <form onSubmit={submitHandler} onReset={resetHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;