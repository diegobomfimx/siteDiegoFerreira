import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <>
            <section id="contato" className="contact">
                <h2>Veritas Lux Mea</h2>
                <div className="contact-description">
                    <span>Tecnologia</span>
                    <span>Gaming</span>
                    <span>Natureza</span>
                    <span>Deus</span>
                </div>
                <a href="mailto:seu-email@exemplo.com" className="contact-button">Entre em contato</a>
            </section>
            
            <footer>
                <div className="social-links">
                    <a href="#" className="social-icon">Instagram</a>
                    <a href="#" className="social-icon">YouTube</a>
                    <a href="#" className="social-icon">Threads</a>
                </div>
                <div className="copyright">© 2024 Diego Ferreira</div>
            </footer>
        </>
    );
};

export default Footer; 