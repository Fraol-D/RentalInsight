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

  const handleImageClick = (item) => {
    if (isRoomCarousel) {
      // For available rooms carousel
      setSelectedRoom({
        ...item,
        images: [item.image],
        price: 1000,
        squareMeters: item.size,
        specifications: [`Floor: ${item.floor}`, `Size: ${item.size}m²`],
        location: "Property Location",
        preferredPaymentCycle: "Monthly",
        adjustablePaymentCycle: true,
        dueDate: "1st of every month"
      });
    } else {
      // For room images carousel
      setSelectedRoom({
        name: `Room View ${items.indexOf(item) + 1}`,
        images: [item],
        price: 0,
        squareMeters: 0,
        specifications: [],
        location: "Property Location",
        preferredPaymentCycle: "Monthly",
        adjustablePaymentCycle: true,
        dueDate: "1st of every month"
      });
    }
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
              onClick={() => handleImageClick(item)}
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
