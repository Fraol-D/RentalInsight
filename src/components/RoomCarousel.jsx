import PropTypes from 'prop-types';
import { useState } from 'react';
import RoomDetails from './RoomDetails';
import '../styles/RoomCarousel.css';

const RoomCarousel = ({ title, images, rooms, isRoomCarousel }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const items = images || rooms;

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseDetails = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
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
