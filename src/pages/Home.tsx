import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import Momentos from '../components/Momentos';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Posts />
            <Momentos />
            <Footer />
        </>
    );
};

export default Home; 