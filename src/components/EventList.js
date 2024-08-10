// EventList.js
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './EventList.css';

const EventList = ({ events, onEventClick }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <motion.div
          key={event.id}
          className="event-item"
          onClick={() => onEventClick(event)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={event.image} alt={event.name} className="event-image" />
          <div className="event-details">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-category">Category: {event.category}</p>
            <p className="event-rating">Rating: {event.rating}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEventClick: PropTypes.func.isRequired,
};

export default EventList;
