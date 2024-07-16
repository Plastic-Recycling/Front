import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CompleteRegistration from './components/CompleteRegistration';

const App = () => {
    return (
        <Router>
            <div className="container mx-auto px-4">
                <nav className="flex justify-center space-x-4 my-4">
                    <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                    <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/complete-registration" element={<CompleteRegistration />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;