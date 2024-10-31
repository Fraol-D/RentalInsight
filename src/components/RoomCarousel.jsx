import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RoomDetails from './RoomDetails';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ title, images, rooms, isRoomCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const items = images || rooms;

  const handleScroll = (direction) => {
    if (!isRoomCarousel) {
      setCurrentIndex(prevIndex => {
        if (direction === 'left') {
          return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
        } else {
          return prevIndex === items.length - 1 ? 0 : prevIndex + 1;
        }
      });
    } else {
      const container = document.querySelector('.row__posters');
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getImageClass = (index) => {
    if (!isRoomCarousel) {
      if (index === currentIndex) return 'row__posterLarge active';
      if (index === (currentIndex - 1 + items.length) % items.length) return 'row__posterLarge prev';
      if (index === (currentIndex + 1) % items.length) return 'row__posterLarge next';
      return 'row__posterLarge hidden';
    }
    return 'row__poster';
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

  const renderRoomCard = (room) => {
    return (
      <div className="room-card" onClick={() => handleImageClick(room)}>
        <div className="room-card__image-container">
          <img 
            src={room.image} 
            alt={room.name} 
            className="room-card__image"
          />
        </div>
        <div className="room-card__content">
          <h3 className="room-card__title">{room.name}</h3>
          <div className="room-card__details">
            <p>Floor: {room.floor}</p>
            <p>Size: {room.size}m²</p>
            <p>Room: 5</p>
          </div>
          <div className="room-card__bottom">
            <div className="room-card__price">
              {room.price} Birr/monthly
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      </div>
    );
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
            isRoomCarousel ? (
              renderRoomCard(item)
            ) : (
              <img
                key={index}
                src={item}
                alt={`Room view ${index + 1}`}
                className={getImageClass(index)}
                onClick={() => handleImageClick(item)}
              />
            )
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
