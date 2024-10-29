import Header from '../components/Header';
import PropertyInfo from '../components/PropertyInfo';
import BuildingImages from '../components/BuildingImages';
import RoomCarousel from '../components/RoomCarousel';
import BuildingAmenities from '../components/BuildingAmenities';
import GeneralImages from '../components/GeneralImages';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import '../styles/Home.css';

// Import all images
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room6.jpg';
import room4 from '../assets/images/room4.jpg';
import room5 from '../assets/images/room5.jpg';
import room6 from '../assets/images/room6.jpg';
import room7 from '../assets/images/room7.jpg';

const Home = () => {
  const propertyName = "Property Name";
  const propertyDescription = "This property is the best ever property";
  
  // Building images at the top
  const buildingImages = [room1, room2, room3];
  
  // Room carousel images - expanded
  const roomImages = [room1, room2, room3, room4, room5, room6, room7, room1, room2, room3];
  
  // Available rooms carousel - expanded with more rooms
  const rooms = [
    { id: 1, name: "Delux Family Room", floor: 5, size: 33.5, image: room1 },
    { id: 2, name: "Standard Double Room", floor: 3, size: 28.0, image: room2 },
    { id: 3, name: "Suite", floor: 6, size: 45.0, image: room3 },
    { id: 4, name: "Premium Suite", floor: 7, size: 50.0, image: room4 },
    { id: 5, name: "Single Room", floor: 2, size: 20.0, image: room5 },
    { id: 6, name: "Twin Room", floor: 4, size: 30.0, image: room6 },
    { id: 7, name: "Executive Suite", floor: 8, size: 55.0, image: room7 },
    { id: 8, name: "Family Room", floor: 5, size: 40.0, image: room1 },
    { id: 9, name: "Delux Suite", floor: 6, size: 48.0, image: room2 },
    { id: 10, name: "Standard Single", floor: 3, size: 22.0, image: room3 },
  ];
  
  const amenities = [
    "Elevator", "Parking", "5 public bathrooms", "Free cleaning", "24/7 Security", "Fitness Center",
  ];
  
  // General images section
  const generalImages = [room4, room5, room6, room7];
  
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
