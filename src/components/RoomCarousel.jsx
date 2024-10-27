import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/RoomCarousel.css';

// Import images
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room6.jpg';
import room4 from '../assets/images/room4.jpg';
import room5 from '../assets/images/room5.jpg';
import room6 from '../assets/images/room6.jpg';
import room7 from '../assets/images/room7.jpg';

const images = [room1, room2, room3, room4, room5, room6, room7];

const RoomCarousel = ({ title, isRoomCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="room-carousel">
      <h2>{title}</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="carousel-items">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${isRoomCarousel ? 'room-card' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={image} alt={`Room view ${index + 1}`} />
              {isRoomCarousel && (
                <div className="room-info">
                  <h3>Room Name {index + 1}</h3>
                  <p>Floor: {Math.floor(Math.random() * 10) + 1}</p>
                  <p>Size: {Math.floor(Math.random() * 50) + 20} sqft</p>
                  <button>View details</button>
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
  isRoomCarousel: PropTypes.bool,
};

export default RoomCarousel;
