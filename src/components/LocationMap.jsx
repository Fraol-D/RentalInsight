import PropTypes from 'prop-types';
import '../styles/LocationMap.css';

const LocationMap = ({ description }) => {
  return (
    <section className="location-map">
      <div className="map-container">
        <h2>Building Location</h2>
        <div className="map-placeholder">
          <p>Google Maps will be displayed here</p>
        </div>
      </div>
      <div className="location-description">
        <h3>Location</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

LocationMap.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LocationMap;
