import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ title, images, rooms, isRoomCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = images || rooms;

  useEffect(() => {
    if (!isRoomCarousel) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [items.length, isRoomCarousel]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <section className={`room-carousel ${isRoomCarousel ? 'large' : 'small'}`}>
      <h2>{title}</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="carousel-items">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${isRoomCarousel ? 'room-card' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img 
                src={isRoomCarousel ? item.image : item} 
                alt={isRoomCarousel ? item.name : `Room view ${index + 1}`} 
              />
              {isRoomCarousel && (
                <div className="room-info">
                  <h3>{item.name}</h3>
                  <p>Floor: {item.floor}</p>
                  <p>Size: {item.size} m²</p>
                  <button className="view-details">View details</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

RoomCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    floor: PropTypes.number,
    size: PropTypes.number,
    image: PropTypes.string,
  })),
  isRoomCarousel: PropTypes.bool,
};

export default RoomCarousel;
