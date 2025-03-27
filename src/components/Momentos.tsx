import React, { useState } from 'react';
import './Momentos.css';

interface ModalImage {
    src: string;
    title: string;
}

const Momentos: React.FC = () => {
    const [modalImage, setModalImage] = useState<ModalImage | null>(null);

    const momentos = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16",
            title: "Meu dia na praia",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
            title: "Pôr do sol especial",
        }
    ];

    const openModal = (image: string, title: string) => {
        setModalImage({ src: image, title });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto';
    };

    // Fechar modal ao pressionar ESC
    React.useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <>
            <section id="momentos" className="gallery">
                <div className="container">
                    <h2>Momentos</h2>
                    <div className="gallery-grid">
                        {momentos.map((momento, index) => (
                            <div 
                                key={momento.id}
                                className="gallery-item"
                                onClick={() => openModal(momento.image, momento.title)}
                            >
                                <img src={momento.image} alt={momento.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div 
                className={`modal-overlay ${modalImage ? 'active' : ''}`}
                onClick={closeModal}
            >
                {modalImage && (
                    <div 
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        <h4 className="modal-title">{modalImage.title}</h4>
                        <button 
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Fechar modal"
                        >
                            ×
                        </button>
                        <img 
                            src={modalImage.src}
                            alt={modalImage.title}
                            className="modal-image"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Momentos; 