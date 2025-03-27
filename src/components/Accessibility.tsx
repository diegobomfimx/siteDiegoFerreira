import React, { useState, useEffect } from 'react';
import './Accessibility.css';

const Accessibility: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(1);
    const [contrast, setContrast] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-scale', fontSize.toString());
    }, [fontSize]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const adjustFontSize = (multiplier: number) => {
        const newSize = fontSize + multiplier;
        if (newSize >= 0.8 && newSize <= 1.4) {
            setFontSize(newSize);
        }
    };

    const resetFontSize = () => {
        setFontSize(1);
    };

    const toggleContrast = () => {
        setContrast(!contrast);
        document.body.classList.toggle('high-contrast');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
            <button 
                className="accessibility-toggle"
                onClick={toggleMenu}
                aria-label="Opções de Acessibilidade"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                </svg>
            </button>

            <div className="accessibility-menu">
                <div className="accessibility-option">
                    <span>Tamanho da Fonte</span>
                    <div className="font-controls">
                        <button 
                            onClick={() => adjustFontSize(-0.1)}
                            aria-label="Diminuir fonte"
                        >
                            A-
                        </button>
                        <button 
                            onClick={resetFontSize}
                            aria-label="Fonte padrão"
                            className="font-default"
                        >
                            A
                        </button>
                        <button 
                            onClick={() => adjustFontSize(0.1)}
                            aria-label="Aumentar fonte"
                        >
                            A+
                        </button>
                    </div>
                </div>

                <div className="accessibility-option">
                    <span>Alto Contraste</span>
                    <button 
                        className={`toggle-button ${contrast ? 'active' : ''}`}
                        onClick={toggleContrast}
                        aria-label="Alternar alto contraste"
                    >
                        <span className="toggle-slider"></span>
                    </button>
                </div>

                <div className="accessibility-option">
                    <span>Modo Escuro</span>
                    <button 
                        className={`toggle-button ${darkMode ? 'active' : ''}`}
                        onClick={toggleDarkMode}
                        aria-label="Alternar modo escuro"
                    >
                        <span className="toggle-slider"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Accessibility; 