import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RoomDetails from './RoomDetails';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ title, images, rooms, isRoomCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const items = images || rooms;
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const renderRoomCard = (room, index) => {
    return (
      <div key={`${room.id}-${index}`} className="carousel-room-card" onClick={() => handleImageClick(room)}>
        <div className="carousel-room-card__image-container">
          <img 
            src={room.image} 
            alt={room.name} 
            className="carousel-room-card__image"
          />
        </div>
        <div className="carousel-room-card__content">
          <h3 className="carousel-room-card__title">{room.name}</h3>
          <div className="carousel-room-card__details">
            <p>Floor: {room.floor}</p>
            <p>Size: {room.size}m²</p>
            <p>Room: 5</p>
          </div>
          <div className="carousel-room-card__bottom">
            <div className="carousel-room-card__price">
              {room.price} Birr/monthly
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      </div>
    );
  };

  const renderCarouselContent = () => {
    if (!isRoomCarousel) {
      return items.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`Room view ${index + 1}`}
          className={getImageClass(index)}
          onClick={() => handleImageClick(item)}
        />
      ));
    }

    // For the room carousel, create a seamless loop by duplicating first few items
    return (
      <>
        {items.map((item, index) => renderRoomCard(item, index))}
        {/* Clone first few items and append them to the end */}
        {items.slice(0, 3).map((item, index) => renderRoomCard(item, `clone-${index}`))}
      </>
    );
  };

  useEffect(() => {
    if (isRoomCarousel && carouselRef.current) {
      const container = carouselRef.current;

      const autoScroll = setInterval(() => {
        if (isHovered) return;

        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;
        
        // If we're near the end (showing cloned items)
        if (currentScroll >= maxScroll - 600) {
          // Quickly jump back to the real items without animation
          container.scrollTo({ left: 0, behavior: 'auto' });
          // Then immediately start scrolling again
          setTimeout(() => {
            container.scrollBy({ left: 1, behavior: 'smooth' });
          }, 50);
        } else {
          container.scrollBy({ left: 580, behavior: 'smooth' });
        }
      }, 3000);

      return () => clearInterval(autoScroll);
    }
  }, [isRoomCarousel, isHovered]);

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
      const container = carouselRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollAmount = direction === 'left' ? -580 : 580;
      
      if (direction === 'right' && container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && container.scrollLeft <= 20) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
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
        <div 
          ref={isRoomCarousel ? carouselRef : null}
          className={`row__posters ${!isRoomCarousel ? 'row__posters--small' : ''}`}
          onMouseEnter={() => isRoomCarousel && setIsHovered(true)}
          onMouseLeave={() => isRoomCarousel && setIsHovered(false)}
        >
          {renderCarouselContent()}
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
