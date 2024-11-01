import { useState, useEffect } from "react";
import Select from 'react-select';
import RoomDetails from '../components/RoomDetails';
import '../styles/Rooms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilter, FaTimes } from 'react-icons/fa';

// Import images
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room6.jpg';
import room4 from '../assets/images/room4.jpg';
import room5 from '../assets/images/room5.jpg';
import room6 from '../assets/images/room6.jpg';
import room7 from '../assets/images/room7.jpg';

const roomSpecificationsOptions = [
  { value: 'furnished', label: 'Furnished' },
  { value: 'with balcony', label: 'With Balcony' },
];

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filters, setFilters] = useState({
    floorIndex: '',
    roomIndex: '',
    squareMeters: '',
    roomSpecifications: [],
    minPrice: '',
    maxPrice: '',
    dueDate: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = [
        {
          id: 1,
          name: "Deluxe Family Room",
          price: 120,
          image: room1,
          description: "A spacious family room with all amenities.",
          specifications: ["furnished", "sea view"],
          dueDate: "2023-12-01"
        },
        {
          id: 2,
          name: "Standard Double Room",
          price: 80,
          image: room2,
          description: "Comfortable double room for couples.",
          specifications: ["furnished"],
          dueDate: "2023-11-15"
        },
        {
          id: 3,
          name: "Suite",
          price: 150,
          image: room3,
          description: "Luxurious suite with separate living area.",
          specifications: ["furnished", "with balcony"],
          dueDate: "2023-12-10"
        },
        {
          id: 4,
          name: "Single Room",
          price: 60,
          image: room4,
          description: "Cozy single room for solo travelers.",
          specifications: ["furnished"],
          dueDate: "2023-11-20"
        },
        {
          id: 5,
          name: "Family Suite",
          price: 180,
          image: room5,
          description: "Spacious suite for families with children.",
          specifications: ["furnished", "sea view"],
          dueDate: "2023-12-05"
        },
        {
          id: 6,
          name: "Executive Room",
          price: 130,
          image: room6,
          description: "Elegant room with work desk and city view.",
          specifications: ["furnished", "with balcony"],
          dueDate: "2023-11-25"
        },
        {
          id: 7,
          name: "Penthouse",
          price: 250,
          image: room7,
          description: "Luxurious penthouse with panoramic views.",
          specifications: ["furnished", "with balcony", "sea view"],
          dueDate: "2023-12-15"
        }
      ];
      setRooms(data);
      setFilteredRooms(data);
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filteredResults = rooms.filter(room => {
        return (
          (filters.floorIndex === '' || room.floorIndex === parseInt(filters.floorIndex)) &&
          (filters.roomIndex === '' || room.roomIndex === filters.roomIndex) &&
          (filters.squareMeters === '' || room.squareMeters >= parseInt(filters.squareMeters)) &&
          (filters.minPrice === '' || room.price >= parseInt(filters.minPrice)) &&
          (filters.maxPrice === '' || room.price <= parseInt(filters.maxPrice)) &&
          (filters.dueDate === '' || new Date(room.dueDate) <= new Date(filters.dueDate)) &&
          (filters.roomSpecifications.length === 0 || filters.roomSpecifications.every(spec => room.specifications.includes(spec)))
        );
      });
      setFilteredRooms(filteredResults);
    };

    applyFilters();
  }, [filters, rooms]);

  const handleToggleFilter = () => {
    setShowFilters(prev => !prev);
  };

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseDetails = () => {
    setSelectedRoom(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSpecificationChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFilters((prevFilters) => ({
      ...prevFilters,
      roomSpecifications: values,
    }));
  };

  const clearFilters = () => {
    setFilters({
      floorIndex: '',
      roomIndex: '',
      squareMeters: '',
      roomSpecifications: [],
      minPrice: '',
      maxPrice: '',
      dueDate: ''
    });
    setFilteredRooms(rooms);
  };

  return (
    <div>
      <Header userName="User" />
      <div className="rooms-container">
        <div
          className={`content-wrapper ${showFilters ? "filters-visible" : ""}`}
        >
          <div className="rooms-list">
            <h1>Available Rooms</h1>
            <div className="rooms-grid">
              {filteredRooms.map((room) => (
                <div key={room.id} className="room-card">
                  <img src={room.image} alt={room.name} />
                  <div className="room-info">
                    <h2>{room.name}</h2>
                    <p>${room.price}/night</p>
                    <button onClick={() => handleViewDetails(room)}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleToggleFilter} className="filter-toggle">
            {showFilters ? <FaTimes /> : <FaFilter />}
          </button>
          <div className={`filter-section ${showFilters ? "show" : ""}`}>
            {showFilters && (
              <div className="filter-content">
                <select
                  name="floorIndex"
                  onChange={handleFilterChange}
                  value={filters.floorIndex}
                >
                  <option value="">All Floors</option>
                  <option value="1">Floor 1</option>
                  <option value="2">Floor 2</option>
                </select>
                <input
                  type="text"
                  name="roomIndex"
                  placeholder="Room Index"
                  onChange={handleFilterChange}
                  value={filters.roomIndex}
                />
                <input
                  type="number"
                  name="squareMeters"
                  placeholder="Min Square Meters"
                  onChange={handleFilterChange}
                  value={filters.squareMeters}
                />
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min Price"
                  onChange={handleFilterChange}
                  value={filters.minPrice}
                />
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max Price"
                  onChange={handleFilterChange}
                  value={filters.maxPrice}
                />
                <input
                  type="date"
                  name="dueDate"
                  placeholder="Due Date"
                  onChange={handleFilterChange}
                  value={filters.dueDate}
                />
                <Select
                  isMulti
                  name="roomSpecifications"
                  options={roomSpecificationsOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={handleSpecificationChange}
                />
                <button onClick={clearFilters} className="clear-filters">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
        <RoomDetails room={selectedRoom} onClose={handleCloseDetails} />
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
