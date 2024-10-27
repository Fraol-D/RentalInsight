import Header from '../components/Header';
import PropertyInfo from '../components/PropertyInfo';
import BuildingImages from '../components/BuildingImages';
import RoomCarousel from '../components/RoomCarousel';
import BuildingAmenities from '../components/BuildingAmenities';
import GeneralImages from '../components/GeneralImages';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import '../styles/Home.css';

// Import building images
import building1 from '../assets/images/room1.jpg';
import building2 from '../assets/images/room2.jpg';
import building3 from '../assets/images/room6.jpg';

const Home = () => {
  const propertyName = "Property Name";
  const propertyDescription = "This property is the best ever property";
  const buildingImages = [building1, building2, building3];
  const roomImages = ["/room1.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg", "/room5.jpg"];
  const rooms = [
    { id: 1, name: "Delux Family Room", floor: 5, size: 33.5, image: "/room1.jpg" },
    { id: 2, name: "Standard Double Room", floor: 3, size: 28.0, image: "/room2.jpg" },
    { id: 3, name: "Suite", floor: 6, size: 45.0, image: "/room3.jpg" },
  ];
  const amenities = [
    "Elevator", "Parking", "5 public bathrooms", "Free cleaning", "24/7 Security", "Fitness Center",
  ];
  const generalImages = ["/parking.jpg", "/lobby.jpg", "/gym.jpg"];
  const locationDescription = "Our building is located in the heart of the city, close to public transportation and major attractions.";

  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <div className="top-section">
          <PropertyInfo name={propertyName} description={propertyDescription} />
          <BuildingImages images={buildingImages} />
        </div>
        <RoomCarousel title="Room Images" images={roomImages} isRoomCarousel={false} />
        <RoomCarousel title="Available Rooms" rooms={rooms} isRoomCarousel={true} />
        <div className="amenities-section">
          <BuildingAmenities amenities={amenities} />
          <GeneralImages images={generalImages} />
        </div>
        <div className="location-section">
          <LocationMap description={locationDescription} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
