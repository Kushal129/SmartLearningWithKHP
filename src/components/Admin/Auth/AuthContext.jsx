import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check localStorage for authentication status on initial load
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Persist the authenticated state
    };

    const logout = async () => {
        await signOut(auth);
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Clear the authenticated state
    };

    // Optional: useEffect to sync localStorage with state (if needed)
    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
