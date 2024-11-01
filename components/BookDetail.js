import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://localhost:5000/api/books/${id}`);
            setBook(response.data);
        };

        fetchBook();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetailPage;
