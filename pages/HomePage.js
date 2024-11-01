import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    const handleSearch = async (query) => {
        const response = await axios.get(`http://localhost:5000/api/books/search?query=${query}`);
        setBooks(response.data);
    };

    return (
        <div>
            <h1>Book Library</h1>
            <SearchBar onSearch={handleSearch} />
            <BookList books={books} />
        </div>
    );
};

export default HomePage;
