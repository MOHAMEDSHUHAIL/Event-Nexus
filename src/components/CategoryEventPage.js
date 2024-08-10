import React from 'react';
import './common.css';

const CategoryEventPage = ({ category }) => {
  const events = [
    { id: 1, title: 'Event 1', description: 'Description of Event 1' },
    { id: 2, title: 'Event 2', description: 'Description of Event 2' },
    // Add more events here
  ];

  return (
    <div className="home-container">
      <div className="background-image" style={{ backgroundImage: 'url(path/to/background.jpg)' }}></div>
      <div className="content">
        <h1 className="home-title">{category} Events</h1>
        <p className="home-description">Explore events in the {category} category.</p>
        <div className="event-list-horizontal">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryEventPage;
