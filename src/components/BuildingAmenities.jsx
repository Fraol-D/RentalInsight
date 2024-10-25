import PropTypes from 'prop-types';
import '../styles/BuildingAmenities.css';

const BuildingAmenities = ({ amenities }) => {
  return (
    <section className="building-amenities">
      <h2>Building Specifications</h2>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </section>
  );
};

BuildingAmenities.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuildingAmenities;
