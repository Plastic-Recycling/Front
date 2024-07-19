import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from './FormComponents';

const API_URL = 'http://localhost:8080';

const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { username, password });
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            setIsLoggedIn(true);
            setMessage('Login successful!');
            setTimeout(() => navigate('/'), 1000);
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {message && <p className="mb-4 text-sm text-gray-600">{message}</p>}
            <form onSubmit={handleLogin}>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

Login.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
};

export default Login;