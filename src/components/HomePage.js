
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import EventList from './EventList';
import NavBar from './NavBar';
import './HomePage.css';



const eventsData = [
  { id: 1, name: 'Music Concert', category: 'Music', rating: 4.5, type: 'Concert', image: 'event1.jpg' },
  { id: 2, name: 'Art Exhibition', category: 'Art', rating: 4.0, type: 'Exhibition', image: 'event5.jpg' },
  { id: 3, name: 'Tech Conference', category: 'Technology', rating: 4.8, type: 'Conference', image: 'event3.jpg' },
  { id: 4, name: 'Food Festival', category: 'Food', rating: 4.3, type: 'Festival', image: 'event4.jpg' },
  { id: 5, name: 'Sports Event', category: 'Sports',rating: 4.7, type: 'Marathon', image: 'event2.jpg' },
];

const categories = {
  'All': ['Concert', 'Training', 'Music Center'],
  'Music': ['Concert', 'Training', 'Music Center'],
  'Art': ['Exhibition', 'Workshop'],
  'Technology': ['Conference', 'Hackathon'],
  'Food': ['Festival', 'Cooking Class'],
  'Sports': ['Marathon', 'Training Session'],
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterEvents(term, selectedCategory, selectedSubcategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
    setIsCategorySelected(true);
    filterEvents(searchTerm, category, '');
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    filterEvents(searchTerm, selectedCategory, subcategory);
  };

  const filterEvents = (term, category, subcategory) => {
    setFilteredEvents(
      eventsData.filter(event =>
        (category === 'All' || event.category === category) &&
        (subcategory === '' || event.type === subcategory) &&
        (event.name.toLowerCase().includes(term.toLowerCase()) ||
          event.category.toLowerCase().includes(term.toLowerCase()))
      )
    );
  };

  const handleFocus = () => {
    setIsSearchActive(true);
  };

  const handleBlur = () => {
    if (searchTerm === '') {
      setIsSearchActive(false);
    }
  };

  const handleEventClick = (event) => {
    navigate(`/event/${event.id}`);
  };

  const upcomingEvents = eventsData.slice(0, 3);
  const topRatedEvents = [...eventsData].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavBar isLoggedIn={true} onLogout={() => console.log('Logout clicked')} />
      <div className="background-image"></div>
      <div className="content">
        <motion.h1
          className="home-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to Event Nexus
        </motion.h1>
        <motion.p
          className="home-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover and join exciting events near you!
        </motion.p>
        <motion.div
          className="search-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <input
            type="text"
            placeholder="Search events by name or category..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="search-box"
          />
        </motion.div>
        <motion.div
          className="categories-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {Object.keys(categories).map(category => (
            <div
              key={category}
              className={`category-item ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </motion.div>
        {selectedCategory !== 'All' && categories[selectedCategory].length > 0 && (
          <motion.div
            className="subcategories-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {categories[selectedCategory].map(subcategory => (
              <div
                key={subcategory}
                className={`subcategory-item ${subcategory === selectedSubcategory ? 'active' : ''}`}
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                {subcategory}
              </div>
            ))}
          </motion.div>
        )}
        {isCategorySelected && selectedCategory !== 'All' && (
          <motion.div
            className="filtered-events"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h2>{selectedCategory} Events</h2>
            <EventList events={filteredEvents} onEventClick={handleEventClick} />
          </motion.div>
        )}
        {!isCategorySelected && (
          <>
            <motion.div
              className="popular-events"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <h2>Popular Events</h2>
              <EventList events={eventsData} onEventClick={handleEventClick} />
            </motion.div>
            <motion.div
              className="upcoming-events"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <h2>Upcoming Events</h2>
              <EventList events={upcomingEvents} onEventClick={handleEventClick} />
            </motion.div>
            <motion.div
              className="top-rated-events"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <h2>Top Rated Events</h2>
              <EventList events={topRatedEvents} onEventClick={handleEventClick} />
            </motion.div>
          </>
        )}
        {isSearchActive && (  
          <motion.div
            className="events-list"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            {filteredEvents.length > 0 ? (
              <EventList events={filteredEvents} onEventClick={handleEventClick} />
            ) : (
              <p>No events found</p>
            )}
          </motion.div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
