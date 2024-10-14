import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
    signOut: () => {} 
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@nature365:user');
        if (userLoggedStorage) {
            return JSON.parse(userLoggedStorage);
        }
        return null;
    });

    async function signIn(data) {
        try {
            const response = await axios.post("https://m3p-backend-squad3-6iew.onrender.com/login", {
                email: data.email,
                password: data.senha
            });
            
            if (response.status === 200) {
                const token = response.data.Token;
                const user = response.data.user;

                localStorage.setItem('token', token);
                localStorage.setItem('@nature365:user', JSON.stringify(user));

                setUser(user);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Erro no login: ", error);
            return false;
        }
    }

    async function signOut() {
        const token = localStorage.getItem('token');
    
        try {

            await axios.post('https://m3p-backend-squad3-6iew.onrender.com/logout', {},
            
            {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            setUser(null);
            localStorage.removeItem('@nature365:user');
            localStorage.removeItem('token');

            
            
            alert("Logout realizado com sucesso!");
    
        } catch (error) {
            console.error("Erro ao realizar logout:", error.response ? error.response.data : error.message);
            alert("Erro ao realizar logout.");
        }
    }
    

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const contexto = useContext(AuthContext);
    return contexto;
}