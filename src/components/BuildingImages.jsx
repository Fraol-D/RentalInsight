import PropTypes from 'prop-types';
import '../styles/BuildingImages.css';

const BuildingImages = ({ images }) => {
  return (
    <div className="building-images">
      <div className="main-image">
        <img src={images[0]} alt="Main building view" />
      </div>
      <div className="side-images">
        <img src={images[1]} alt="Building view 2" />
        <img src={images[2]} alt="Building view 3" />
      </div>
    </div>
  );
};

BuildingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuildingImages;
