import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <div>
            <Link to={`/book/${book.id}`}>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </Link>
        </div>
    );
};

export default BookCard;
