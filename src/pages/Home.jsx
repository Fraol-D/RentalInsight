import Header from '../components/Header';
import PropertyInfo from '../components/PropertyInfo';
import RoomCarousel from '../components/RoomCarousel';
import BuildingAmenities from '../components/BuildingAmenities';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const propertyName = "Property Name";
  const propertyDescription = "This property is the best ever property";
  const rooms = [
    { id: 1, name: "Delux Family Room", floor: 5, size: 33.5, image: "/room1.jpg" },
    { id: 2, name: "Standard Double Room", floor: 3, size: 28.0, image: "/room2.jpg" },
    { id: 3, name: "Suite", floor: 6, size: 45.0, image: "/room3.jpg" },
  ];
  const amenities = [
    "Elevator",
    "Parking",
    "5 public bathrooms",
    "Free cleaning",
    "24/7 Security",
    "Fitness Center",
  ];

  return (
    <div className="home">
      <Header />
      <main className="container">
        <PropertyInfo name={propertyName} description={propertyDescription} />
        <RoomCarousel rooms={rooms} />
        <BuildingAmenities amenities={amenities} />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
