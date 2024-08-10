import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const EventCard = ({ event, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardMedia component="img" height="140" image={event.image} alt={event.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {event.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {event.rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
