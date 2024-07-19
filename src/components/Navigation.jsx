import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const getLinkClassName = (path) => {
        const baseClasses = "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
        return isActive(path)
            ? `${baseClasses} border-indigo-500 text-gray-900`
            : `${baseClasses} border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300`;
    };

    const getMobileLinkClassName = (path) => {
        const baseClasses = "block pl-3 pr-4 py-2 border-l-4 text-base font-medium";
        return isActive(path)
            ? `${baseClasses} bg-indigo-50 border-indigo-500 text-indigo-700`
            : `${baseClasses} border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700`;
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src="/src/assets/logo.png" alt="recycle" />
                            <span className="ml-2 text-xl font-bold">Plastic-Recycle</span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link to="/" className={getLinkClassName('/')}>
                            Home
                        </Link>
                        <Link to="/products" className={getLinkClassName('/products')}>
                            Products
                        </Link>
                        <Link to="/about" className={getLinkClassName('/about')}>
                            About
                        </Link>
                        <Link to="/contact" className={getLinkClassName('/contact')}>
                            Contact
                        </Link>
                        <Link to="/login" className={getLinkClassName('/login')}>
                            Login
                        </Link>
                        <Link to="/register" className={getLinkClassName('/register')}>
                            Register
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link to="/" className={getMobileLinkClassName('/')}>
                            Home
                        </Link>
                        <Link to="/products" className={getMobileLinkClassName('/products')}>
                            Products
                        </Link>
                        <Link to="/about" className={getMobileLinkClassName('/about')}>
                            About
                        </Link>
                        <Link to="/contact" className={getMobileLinkClassName('/contact')}>
                            Contact
                        </Link>
                        <Link to="/login" className={getMobileLinkClassName('/login')}>
                            Login
                        </Link>
                        <Link to="/register" className={getMobileLinkClassName('/register')}>
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}