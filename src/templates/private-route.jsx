import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import { LogOut, User } from 'lucide-react'
import "./private-route.css"
import imglogo from "../assets/logoNaturezaBco.png";

export function TemplatePrivateRoute() {
    const { user, signOut } = useAuth()

    return user ? (
        <div className='container-private'>
            
            <div className="nav-ap">
                <img src={imglogo} 
                alt="Logomarca da aplicação" />
                
                <div>
                    <span className=''><User size={24} /> {user.email}</span>        
                </div>
                <button className='btn btn-dark' onClick={signOut}>
                    <LogOut size={24} />
                </button>
                
            </div>

            <main className=''>
                <Outlet />
            </main>
        </div>
    ) : <Navigate to="/" />
}