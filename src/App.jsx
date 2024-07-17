import React, {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CompleteRegistration from './components/CompleteRegistration';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Newsletter } from './components/Newsletter.jsx';
import { Recycle } from './components/Recycle.jsx';
import { Main } from './components/Main.jsx';
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navigation/>
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
                scrollHorizontally: true,
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
                <Hero />
            </div>
            <div className="section">
                <Main />
            </div>
            <div className="section">
                <Recycle />
            </div>
            <div className="section">
                <Products />
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