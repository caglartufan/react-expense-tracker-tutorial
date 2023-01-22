import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    console.log(expenses);
    return (
        <Card className="expenses">
            {
                expenses.map(
                    expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )
            }
        </Card>
    );
}

export default Expenses;