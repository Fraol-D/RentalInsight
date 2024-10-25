import PropTypes from 'prop-types';
import '../styles/RoomDetails.css';
import { FaTimes } from 'react-icons/fa';

const RoomDetails = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="room-details-overlay">
      <div className="room-details-panel">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="room-title">{room.name}</h2>
        
        <div className="room-images">
          {room.images && room.images.length > 0 ? (
            room.images.slice(0, 8).map((image, index) => (
              <img key={index} src={image} alt={`${room.name} image ${index + 1}`} className="room-image" />
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>

        <p className="room-price">${room.price}/night</p>
        <p className="room-square-meters">Square Meters: {room.squareMeters} m²</p>
        <p className="room-description">Description: {room.description || 'No description available.'}</p>
        <p className="room-specifications">Specifications: {room.specifications.length > 0 ? room.specifications.join(', ') : 'No specifications available.'}</p>
        <p className="room-payment-cycle">Preferred Payment Cycle: {room.preferredPaymentCycle}</p>
        <p className="room-adjustable-cycle">Adjustable Payment Cycle: {room.adjustablePaymentCycle ? 'Yes' : 'No'}</p>
        <p className="room-due-date">Due Date: {room.dueDate || 'No due date specified.'}</p>
        
        <div className="room-location">
          <h3>Location</h3>
          <iframe
            title="Google Maps Location"
            width="100%"
            height="300"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(room.location)}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

RoomDetails.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    squareMeters: PropTypes.number.isRequired,
    description: PropTypes.string,
    specifications: PropTypes.arrayOf(PropTypes.string),
    preferredPaymentCycle: PropTypes.string,
    adjustablePaymentCycle: PropTypes.bool,
    dueDate: PropTypes.string,
    location: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default RoomDetails;

