import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import CompleteRegistration from './components/user/CompleteRegistration.jsx';
import About from './components/home/About.jsx';
import Contact from "./components/home/Contact.jsx";
import Profile from './components/user/Profile.jsx';
import ImageUploadAnalysis from "./components/home/ImageUploadAnalysis.jsx";
import {Navigation} from './components/Navigation';
import {Hero} from './components/home/Hero.jsx';
import {Products} from './components/home/Products.jsx';
import {Newsletter} from './components/home/Newsletter.jsx';
import {Recycle} from './components/home/Recycle.jsx';
import {Main} from './components/home/Main.jsx';
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
    }, []);
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <nav className="flex justify-center space-x-4 my-4">
                </nav>
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/products" element={<ImageUploadAnalysis />}/>
                        <Route path="/complete-registration" element={<CompleteRegistration/>}/>
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

function Home() {
    const fullpageRef = useRef(null);

    useEffect(() => {
        if (!fullpageRef.current) {
            fullpageRef.current = new Fullpage('#fullpage', {
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 300,
                scrollOverflow: true,
            });
        }

        return () => {
            if (fullpageRef.current) {
                fullpageRef.current.destroy('all');
                fullpageRef.current = null;
            }
        };
    }, []);

    return (
        <div id="fullpage">
            <div className="section">
                <Hero/>
            </div>
            <div className="section">
                <Main/>
            </div>
            <div className="section">
                <Recycle/>
            </div>
            <div className="section">
                <Products/>
            </div>
            <div className="section">
                <Newsletter/>
                <footer className="bg-gray-100 py-6 text-center">
                    <p>© 2024 Plastic-Recycle. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;