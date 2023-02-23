import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    const [filter, setFilter] = useState(2021);

    const filterChangeHandler = filterValue => {
        setFilter(filterValue);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter filterValue={filter} onFilterChange={filterChangeHandler} />
            {
                expenses
                    .filter(
                        expense => expense.date.getFullYear() === filter
                    )
                    .map(
                        expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    )
            }
        </Card>
    );
}

export default Expenses;