import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        const formData = {
            inquiryType,
            name,
            company,
            phone,
            email,
            content,
            agreeToTerms
        };

        try {
            const response = await axios.post(`${API_URL}/contact`, formData);
            console.log('Server response:', response.data);
            setSubmitStatus('success');
            // Reset form fields
            setInquiryType('');
            setName('');
            setCompany('');
            setPhone('');
            setEmail('');
            setContent('');
            setAgreeToTerms(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="flex flex-col md:flex-row mt-20">
            {/* Left side - Inquiry Type */}
            <div className="w-full md:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-4">문의유형</h2>
                <div className="space-y-2">
                    {['서비스', '컨설팅', '가격', '기타'].map((type) => (
                        <label key={type} className="flex items-center">
                            <input
                                type="radio"
                                name="inquiryType"
                                value={type}
                                checked={inquiryType === type}
                                onChange={(e) => setInquiryType(e.target.value)}
                                className="mr-2"
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-3/4 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1">이름 *</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-1">회사명 *</label>
                        <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-1">연락처 *</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">이메일 *</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block mb-1">내용</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border rounded p-2 h-32"
                        ></textarea>
                    </div>
                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={agreeToTerms}
                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                className="mr-2"
                            />
                            개인정보 수집 및 이용 동의
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        disabled={submitStatus === 'submitting'}
                    >
                        {submitStatus === 'submitting' ? '제출 중...' : '신청하기'}
                    </button>
                    {submitStatus === 'success' && (
                        <p className="text-green-600">문의가 성공적으로 제출되었습니다.</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-600">문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;