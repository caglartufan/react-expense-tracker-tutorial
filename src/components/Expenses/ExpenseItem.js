import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
    const [titleState, setTitleState] = useState(title);

    const clickHandler = () => {
        setTitleState('Updated!!!');
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{titleState}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;