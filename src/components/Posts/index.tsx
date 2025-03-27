import React from 'react';
import './Posts.css';

const Posts: React.FC = () => {
  return (
    <section id="posts" className="posts-section">
      <div className="container">
        <h2>Últimos Posts</h2>
        <div className="posts-grid">
          {/* Posts serão adicionados aqui */}
        </div>
      </div>
    </section>
  );
};

export default Posts; 