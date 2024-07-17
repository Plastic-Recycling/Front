import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CompleteRegistration from './components/CompleteRegistration';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Newsletter } from './components/Newsletter.jsx';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navigation />
                <nav className="flex justify-center space-x-4 my-4">
                </nav>
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/complete-registration" element={<CompleteRegistration/>}/>
                    </Routes>
                </main>
                <footer className="bg-gray-100 py-6 text-center">
                    <p>© 2024 Plastic-Recycle. All rights reserved.</p>
                </footer>
            </div>
        </Router>
);
};

function Home() {
    return (
        <>
            <Hero />
            <Products />
            <Newsletter />
        </>
    );
}

export default App;