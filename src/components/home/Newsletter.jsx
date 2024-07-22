import React, { useState } from 'react';

export function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        console.log('Subscribing email:', email);
        // Reset form
        setEmail('');
    };

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                    <span className="block">우리의 서비스 뉴스레터를 구독하시고, 최신 재활용 정보와 친환경 팁, 그리고 특별한 이벤트 소식을 받아보세요.</span>
                    <span className="block text-indigo-600">지속 가능한 미래를 함께 만들어가요!</span>
                </h2>
                <form onSubmit={handleSubmit} className="mt-8 sm:flex">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}