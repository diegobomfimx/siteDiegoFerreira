import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Posts.css';

const Posts: React.FC = () => {
    const posts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
            title: "Zaphyra, minha cachorrinha",
            date: "12 Março, 2024",
            excerpt: "Um dia especial com minha companheira de quatro patas, explorando novos lugares e criando memórias.",
            link: "#"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
            title: "Mergulho e adrenalina",
            date: "10 Março, 2024",
            excerpt: "Descobrindo as maravilhas do mundo subaquático em uma aventura inesquecível.",
            link: "#"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
            title: "Saída ao parque",
            date: "8 Março, 2024",
            excerpt: "Uma coleção de momentos capturados ao acaso, cada um contando sua própria história.",
            link: "#"
        }
    ];

    return (
        <section id="posts" className="posts">
            <h2>Últimos Posts</h2>
            <div className="posts-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {posts.map(post => (
                        <SwiperSlide key={post.id}>
                            <div className="post-card">
                                <div className="post-image">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="post-content">
                                    <h3>{post.title}</h3>
                                    <div className="post-date">{post.date}</div>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <a href={post.link} className="post-link">Leia mais</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Posts; 