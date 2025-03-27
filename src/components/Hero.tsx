import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Diego <span className="italic">(di-eh-go)</span> é um entusiasta multidisciplinar criando identidades visuais, experiências digitais e momentos memoráveis.</h1>
            </div>
        </section>
    );
};

export default Hero; 