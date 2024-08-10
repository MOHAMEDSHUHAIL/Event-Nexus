import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventDetailPage.css';

const eventsData = [
  { id: 1, name: 'Rocking the Night Away', category: 'Music', description: 'An amazing music concert featuring top artists.', details: 'Join us for an unforgettable night of live music featuring top rock bands from across the country.' },
  { id: 2, name: 'Art & Culture Expo', category: 'Art', description: 'Explore stunning artworks from various artists.', details: 'Immerse yourself in the vibrant world of art at the Art & Culture Expo. This event showcases stunning artworks from talented artists, including paintings, sculptures, and digital art. Attend art talks, participate in creative workshops, and explore the diverse expressions of art and culture in this enriching experience.' },
  { id: 3, name: 'Innovate Tech Conference 2024', category: 'Technology', description: 'Join tech enthusiasts to discuss the latest trends.', details: 'Dive into the future of technology at the Innovate Tech Conference 2024. This event brings together industry leaders, innovative startups, and tech enthusiasts to explore the latest trends, groundbreaking technologies, and future opportunities in the tech world.' },
  { id: 4, name: 'Gourmet Food Festival', category: 'Food', description: 'Taste delicious foods from around the world.', details: 'Indulge your taste buds at the Gourmet Food Festival, where culinary delights from around the world come together in one spectacular event. ' },
  { id: 5, name: 'Annual Sports Extravaganza', category: 'Sports', description: 'Participate in a marathon and test your endurance.', details: 'Get ready for an action-packed day at the Annual Sports Extravaganza. This event features a variety of sports competitions, including soccer, basketball, and track and field. Cheer on your favorite teams, participate in friendly matches, and enjoy a day filled with athletic excitement and community spirit.' },
];

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventsData.find(event => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <motion.div
      className="event-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="background-image"></div>
      <div className="content">
        <motion.h1
          className="event-detail-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {event.name}
        </motion.h1>
        <motion.p
          className="event-detail-category"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Category: {event.category}
        </motion.p>
        <motion.p
          className="event-detail-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {event.details}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EventDetailPage;

