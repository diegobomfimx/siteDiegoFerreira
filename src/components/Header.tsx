import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isJornalPage = location.pathname === '/jornal';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logo">Diego Ferreira</Link>
                
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link 
                        to="/" 
                        onClick={toggleMenu}
                        className={isActive('/') ? 'active' : ''}
                    >
                        Home
                    </Link>
                    {!isJornalPage && (
                        <>
                            <a href="#momentos" onClick={toggleMenu}>Momentos</a>
                            <a href="#contato" onClick={toggleMenu}>Contato</a>
                            <a href="#posts" onClick={toggleMenu}>Recentes</a>
                        </>
                    )}
                    <Link 
                        to="/jornal" 
                        onClick={toggleMenu}
                        className={`jornal-link ${isActive('/jornal') ? 'active' : ''}`}
                    >
                        Jornal
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header; 