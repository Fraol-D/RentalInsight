import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ images, rooms, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = images || rooms;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <section className="room-carousel">
      <h2>{title}</h2>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${images ? 'image-only' : 'room-card'}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images ? (
              <img src={item} alt={`Room view ${index + 1}`} />
            ) : (
              <>
                <img src={item.image} alt={item.name} />
                <div className="room-info">
                  <h3>{item.name}</h3>
                  <p>Floor: {item.floor}</p>
                  <p>Size: {item.size} sqft</p>
                  <button>View details</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

RoomCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      floor: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default RoomCarousel;
