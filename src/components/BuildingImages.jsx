import PropTypes from 'prop-types';
import '../styles/BuildingImages.css';

const BuildingImages = ({ images }) => {
  return (
    <div className="building-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Building view ${index + 1}`} />
      ))}
    </div>
  );
};

BuildingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuildingImages;
