import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';

const motivationalQuotes = [
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Believe you can and you're halfway there.",
    "You are never too old to set another goal or to dream a new dream.",
];

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        if (savedUsername) {
            setUsername(savedUsername);
        }
        if (savedPassword) {
            setPassword(savedPassword);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, username, password);
            login();

            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            setShowModal(true);
            navigate('/AdminPage');
            toast.success('Welcome Back 🤩.');

        } catch (error) {
            toast.error('Invalid username or password.');
            console.error("Login error:", error.message);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login to Your Account</h2>

                <div className="mb-4">
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Email"
                        className="border rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
                        required
                    />
                </div>

                <div className="mb-6">
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="border rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-600 hover:text-purple-600 transition duration-200"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
                </div>

                <button
                    type="submit"
                    className="bg-purple-600 text-white rounded-md p-3 w-full hover:bg-purple-700 transition duration-300"
                >
                    Login
                </button>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account? <a href="/signup" className="text-purple-600 hover:underline">Sign Up</a></p>
                </div>
            </form>

            {/* Modal for motivational quotes */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Motivational Quote</h2>
                        <p className="text-gray-800 mb-4 text-center">
                            {motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}
                        </p>
                        <button
                            onClick={handleCloseModal}
                            className="bg-purple-600 text-white rounded-md p-2 w-full hover:bg-purple-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
