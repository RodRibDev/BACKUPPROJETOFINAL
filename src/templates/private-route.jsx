import { Outlet, Navigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { LogOut, User } from "lucide-react";
import "./private-route.css";
import imglogo from "../assets/logoNaturezaBco.png";

export function TemplatePrivateRoute() {
  const { user, signOut } = useAuth();

  return user ? (
    <div className="container-private">
      <div className="nav-ap">
        <img src={imglogo} alt="Logomarca da aplicação" width={180} />

        <div className="links-app">
        <ul className="nav-ul">
          <li>
            <Link to="/dashboard" className="app-link">Home</Link>
          </li>
          <li>
            <Link to="/cadastroLocais" className="app-link">Cadastre Locais</Link>
          </li>
          <li>
            <Link to="/listaLocais" className="app-link">Lista</Link>
          </li>
        </ul>
        </div>

        <div className="div-desconectar">
            <p style={{ color: 'white' }}>Desconectar</p>
            <button className="btn btn-dark" onClick={signOut}>
            <LogOut size={24} />
            </button>

        </div>

        
      </div>

      <main className="">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
