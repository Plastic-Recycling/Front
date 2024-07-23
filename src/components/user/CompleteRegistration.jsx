import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input, Button } from '../FormComponents.jsx';
import axiosInstance from "../../api/axiosInstance.jsx";

const CompleteRegistration = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const emailFromUrl = searchParams.get('email');
        const tokenFromUrl = searchParams.get('token');
        if (emailFromUrl) {
            setEmail(emailFromUrl);
        }
        if (tokenFromUrl) {
            setToken(tokenFromUrl)
        }
    }, [location]);

    const handleCompleteRegistration = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post(`/register/complete`, { email, name, username, password, token });
            setMessage('Registration completed successfully! You can now login.');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setMessage('Error completing registration. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
            {message && <p className="mb-4 text-sm text-gray-600">{message}</p>}
            <form onSubmit={handleCompleteRegistration}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <Input type="email" value={email} readOnly placeholder="Email" />
                <Input type="text" value={token} readOnly placeholder="Token" />
                <Button type="submit">Complete Registration</Button>
            </form>
        </div>
    );
};

export default CompleteRegistration;