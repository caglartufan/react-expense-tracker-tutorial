import './Card.css';

const Card = ({ children, className }) => {
    className = 'card ' + className;

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Card;