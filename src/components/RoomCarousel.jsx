import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RoomDetails from './RoomDetails';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ title, images, rooms, isRoomCarousel }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const items = images || rooms;

  const handleScroll = (direction) => {
    const container = document.querySelector(`.row__posters${!isRoomCarousel ? '--small' : ''}`);
    const scrollAmount = direction === 'left' ? -200 : 200;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseDetails = () => {
    setSelectedRoom(null);
  };

  return (
    <div className={`row ${!isRoomCarousel ? 'row--small' : ''}`}>
      <h2>{title}</h2>
      <div className="carousel-container">
        {!isRoomCarousel && (
          <div className="scroll-buttons">
            <button 
              className="scroll-button left"
              onClick={() => handleScroll('left')}
            >
              <FaChevronLeft className="scroll-icon" />
            </button>
            <button 
              className="scroll-button right"
              onClick={() => handleScroll('right')}
            >
              <FaChevronRight className="scroll-icon" />
            </button>
          </div>
        )}
        <div className={`row__posters ${!isRoomCarousel ? 'row__posters--small' : ''}`}>
          {items.map((item, index) => (
            <img
              key={index}
              src={isRoomCarousel ? item.image : item}
              alt={isRoomCarousel ? item.name : `Room view ${index + 1}`}
              className={`row__poster ${!isRoomCarousel && "row__posterLarge"}`}
              onClick={() => isRoomCarousel && handleRoomClick(item)}
            />
          ))}
        </div>
      </div>
      {selectedRoom && (
        <RoomDetails room={selectedRoom} onClose={handleCloseDetails} />
      )}
    </div>
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
