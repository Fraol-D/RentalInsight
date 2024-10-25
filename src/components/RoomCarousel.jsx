import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ rooms }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  };

  return (
    <section className="room-carousel">
      <h2>Available Rooms</h2>
      <div className="carousel-container">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="room-card"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>Floor: {room.floor}</p>
              <p>Size: {room.size} sqft</p>
              <button>View details</button>
            </div>
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
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      floor: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RoomCarousel;
