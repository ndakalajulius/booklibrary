import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage onAuthSuccess={handleAuthSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/book/:id" element={isAuthenticated ? <BookDetailPage /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
