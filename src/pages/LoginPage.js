import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = ({ onAuthSuccess }) => {
    return (
        <div>
            <h1>Login</h1>
            <AuthForm isLogin={true} onAuthSuccess={onAuthSuccess} />
        </div>
    );
};

export default LoginPage;
