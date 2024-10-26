import PropTypes from 'prop-types';
import '../styles/GeneralImages.css';

const GeneralImages = ({ images }) => {
  return (
    <div className="general-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`General view ${index + 1}`} />
      ))}
    </div>
  );
};

GeneralImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GeneralImages;
