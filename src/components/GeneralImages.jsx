import PropTypes from 'prop-types';
import '../styles/GeneralImages.css';

const GeneralImages = ({ images }) => {
  return (
    <div className="general-images">
      <div className="left-images">
        <img src={images[0]} alt="General view 1" />
        <img src={images[1]} alt="General view 2" />
      </div>
      <div className="right-images">
        <img src={images[2]} alt="General view 3" />
        <img src={images[3]} alt="General view 4" />
      </div>
    </div>
  );
};

GeneralImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GeneralImages;
