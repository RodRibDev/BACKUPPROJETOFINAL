import { Outlet, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./sidebar.css";
import imglogo from "../../assets/logoNaturezaBco.png";
import { useState, useEffect } from "react";

export function Sidebar() {
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

  return (
    <div className={`container-public ${menuOpen && isMobile ? "menu-open" : ""}`}>
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
              <Link to="/home" className="app-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/cadastro" className="app-link" onClick={toggleMenu}>Cadastre-se!</Link>
            </li>
            <li>
              <Link to="/login" className="app-link" onClick={toggleMenu}>Entrar</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`content-area ${isMobile ? "content-area-mobile" : ""} ${menuOpen && isMobile ? "main-expanded" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
}
