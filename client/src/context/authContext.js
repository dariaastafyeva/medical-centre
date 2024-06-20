import axios from 'axios';
import { createContext, useEffect, useRef, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const userIcon = useRef(currentUser !== null ? "/logged-icon.png" : "/login-icon.png");

    const login = async (inputs) => {
        const res = await axios.post("/auth/login", inputs)
        setCurrentUser(res.data);
        userIcon.current = "/logged-icon.png";
    }

    const logout = async () => {
        await axios.post('/auth/logout')
        setCurrentUser(null)
        userIcon.current = "/login-icon.png";
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, userIcon, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}