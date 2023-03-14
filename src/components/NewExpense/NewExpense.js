import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [shouldShowExpenseForm, setShouldShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = expenseData => {
        expenseData.id = Math.random().toString();

        onAddExpense(expenseData);
    };

    const toggleExpenseForm = () => {
        setShouldShowExpenseForm(prevState => !prevState);
    };

    return (
        <div className="new-expense">
            {
                shouldShowExpenseForm
                    ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={toggleExpenseForm} />
                    : <button type="button" onClick={toggleExpenseForm}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;