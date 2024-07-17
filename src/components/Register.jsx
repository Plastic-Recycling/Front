import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from './FormComponents';

const API_URL = 'http://localhost:8080';

const Register = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showTokenInput, setShowTokenInput] = useState(false);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/register/verifyEmail`, null, { params: { email } });
            console.log(response.data.isNewEmail)
            if (response.data.isNewEmail) {
                setMessage('확인 이메일이 전송되었습니다. 이메일을 확인해주세요.');
            } else {
                setMessage('이미 인증된 이메일입니다. 토큰을 입력해주세요.');
                setShowTokenInput(true);
            }
        } catch (error) {
            setMessage('이메일 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const handleVerifyToken = async (e) => {
        e.preventDefault();
        try {
            const url = `${API_URL}/register/confirm?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;
            window.location.href = url;
        } catch (error) {
            setMessage('유효하지 않은 토큰이거나 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">회원가입</h2>
            {message && <p className="mb-4 text-sm text-gray-600">{message}</p>}
            {!showTokenInput ? (
                <form onSubmit={handleVerifyEmail}>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일"
                    />
                    <Button type="submit">이메일 인증</Button>
                </form>
            ) : (
                <form onSubmit={handleVerifyToken}>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일"
                        readOnly
                    />
                    <Input
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        placeholder="토큰"
                    />
                    <Button type="submit">토큰 확인</Button>
                </form>
            )}
        </div>
    );
};

export default Register;