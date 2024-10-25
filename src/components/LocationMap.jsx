import '../styles/LocationMap.css';

const LocationMap = () => {
  return (
    <section className="location-map">
      <h2>Building Location</h2>
      <div className="map-placeholder">
        <p>Google Maps will be displayed here</p>
      </div>
      <div className="location-description">
        <h3>Building Location Description</h3>
        <p>Add details about the building location here.</p>
      </div>
    </section>
  );
};

export default LocationMap;
