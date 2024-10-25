import PropTypes from 'prop-types';
import '../styles/PropertyInfo.css';

const PropertyInfo = ({ name, description }) => {
  return (
    <section className="property-info">
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
};

PropertyInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PropertyInfo;
