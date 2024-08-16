import { Outlet, Navigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { LogOut, Menu } from "lucide-react";
import "./private-route.css";
import imglogo from "../assets/logoNaturezaBco.png";
import { useState, useEffect } from "react";

export function TemplatePrivateRoute() {
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    const isNowMobile = window.innerWidth <= 768;
    setIsMobile(isNowMobile);
    if (!isNowMobile) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return user ? (
    <div className={`container-private ${menuOpen && isMobile ? "menu-open" : ""}`}>
      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      )}
      <div className={`nav-ap ${menuOpen && isMobile ? "active" : ""}`}>
        <img src={imglogo} alt="Logomarca da aplicação" width={180} />

        <div className="links-app">
          <ul className="nav-ul">
            <li>
              <Link to="/dashboard" className="app-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/dashboard/cadastroLocais" className="app-link" onClick={toggleMenu}>Cadastre Locais</Link>
            </li>
            <li>
              <Link to="/dashboard/listaLocais" className="app-link" onClick={toggleMenu}>Lista</Link>
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

      <div className={`content-area ${isMobile ? "content-area-mobile" : ""} ${menuOpen && isMobile ? "main-expanded" : ""}`}>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

