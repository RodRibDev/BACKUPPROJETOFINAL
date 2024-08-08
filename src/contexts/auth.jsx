import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
    signOut: () => {} 
})
// simular uma chamada para api => fetch
async function apiAuth(url, data) {
    console.log(url, data)
    return new Promise(resolve => setTimeout(resolve, 3000))
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@lab365:userLogged')

        if(userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }

        return null
    })

    async function signIn(data) {
        
        if(data.email !== "fulano@teste.com.br" || data.password !== "123") {
            throw new Error("Email/Senha invalida")
        }
       
        await apiAuth('https://api.lab365.com.br/sessions', data)
        
        const userResponse = {
            id: Date.now(),
            first_name: "Fulano de tal",
            email: data.email,
        }

        setUser(userResponse)
        localStorage.setItem('@lab365:userLogged', JSON.stringify(userResponse))
        localStorage.setItem('@lab365:token', Date.now())
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lab365:userLogged')
        localStorage.removeItem('@lab365:token')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}