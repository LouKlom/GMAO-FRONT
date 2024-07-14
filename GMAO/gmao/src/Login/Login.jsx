import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../animations.css'; // Import the CSS file

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous error message

        const data = {
            email,
            password,
        };

        try {
            // Use Axios to send a POST request
            const response = await axios.post('http://localhost:8080/api/auth/authenticate', data);
  
            // Récuperer Token et stocker vers Localstorage
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);

            Navigate('/');
        } catch (error) {
            // Handle errors (e.g., display error message)
            console.error('Error during login:', error);
            setError('Email ou mot de passe incorrect');
        }      
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
            <div className="form-container bg-white shadow-lg rounded-lg p-8 md:p-12 animate-fadeIn max-w-md mx-auto">
                <div className="mb-6 text-center">
                    <img src='./GMAO_LOGO.png' alt='Logo' className="mx-auto w-24 h-24 rounded-full shadow-md" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">GMAO - Connexion</h2>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Adresse e-mail:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                            Mot de passe:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-bold p-3 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}

