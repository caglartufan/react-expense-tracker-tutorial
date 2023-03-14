import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    const [filter, setFilter] = useState(2021);

    const filterChangeHandler = filterValue => {
        setFilter(filterValue);
    };

    const filteredExpenses = expenses.filter(
        expense => expense.date.getFullYear() === filter
    );

    return (
        <Card className="expenses">
            <ExpensesFilter filterValue={filter} onFilterChange={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;