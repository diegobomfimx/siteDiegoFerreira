import React, { useEffect } from 'react';
import './Jornal.css';

const Jornal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
            title: 'Zaphyra, minha cachorrinha',
            date: '12 Março, 2024',
            excerpt: 'Explorando novos lugares com minha companheira peluda. Cada passeio é uma nova aventura cheia de descobertas e momentos especiais.',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
            title: 'Mergulho e adrenalina',
            date: '10 Março, 2024',
            excerpt: 'Uma experiência incrível nas profundezas do oceano. A sensação de liberdade e paz que o mergulho proporciona é indescritível.',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
            title: 'Saída ao parque',
            date: '8 Março, 2024',
            excerpt: 'Um dia perfeito para aproveitar a natureza. O parque oferece momentos de tranquilidade e conexão com o ambiente natural.',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
            title: 'Meu dia na praia',
            date: '5 Março, 2024',
            excerpt: 'Sol, mar e muita diversão. A praia sempre proporciona momentos únicos de relaxamento e alegria.',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
            title: 'Café da manhã especial',
            date: '3 Março, 2024',
            excerpt: 'Começando o dia com um delicioso café da manhã. Momentos simples que fazem toda a diferença.',
        }
    ];

    return (
        <div className="jornal">
            <div className="jornal-container">
                <h1>Jornal</h1>
                <div className="posts-list">
                    {posts.map(post => (
                        <article key={post.id} className="post-item">
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="post-content">
                                <h2>{post.title}</h2>
                                <span className="post-date">{post.date}</span>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <a href="#" className="post-link">
                                    ler post completo
                                    <span className="arrow">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jornal; 