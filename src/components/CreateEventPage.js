import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faQuestionCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import './CreateEventPage.css';

const libraries = ['places'];

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    shortDescription: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    price: '',
    seatLimit: '',
    poster: null,
    location: 'Venue',
    venueLocation: '',
    streetAddress: '',
    region: '',
    eventVenue: '',
    meetingLink: '',
    showAdditionalFields: false,
  });

  const [posterPreview, setPosterPreview] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEventData((prevData) => ({
      ...prevData,
      poster: file,
    }));
    if (file) {
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
  };

  const handleLocationChange = (newLocation) => {
    setEventData((prevData) => ({
      ...prevData,
      location: newLocation,
      meetingLink: newLocation === 'Online Event' ? prevData.meetingLink : '',
    }));
  };

  const handlePlaceSelect = (autocomplete) => {
    const place = autocomplete.getPlace();
    setEventData((prevData) => ({
      ...prevData,
      venueLocation: place.formatted_address,
    }));
  };

  const handleAddLocationDetails = () => {
    setEventData((prevData) => ({
      ...prevData,
      showAdditionalFields: true,
    }));
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Create Event
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Event Name"
            name="shortDescription"
            value={eventData.shortDescription}
            onChange={handleChange}
            fullWidth
            multiline
            maxRows={2}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Short Description"
            name="shortDescription"
            value={eventData.shortDescription}
            onChange={handleChange}
            fullWidth
            multiline
            maxRows={2}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Event Date"
            name="date"
            type="date"
            value={eventData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Start Time"
            name="startTime"
            type="time"
            value={eventData.startTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="End Time"
            name="endTime"
            type="time"
            value={eventData.endTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Event Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                variant={eventData.location === 'Venue' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                onClick={() => handleLocationChange('Venue')}
                className="Button_root_v7mbu Button_ghost_v7mbu"
              >
             
                Venue
              </Button>
              
            </Grid>
            <Grid item xs={12} sm={4}>
            
              <Button
              
                variant={eventData.location === 'Online Event' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faGlobe} />}
                onClick={() => handleLocationChange('Online Event')}
                className="Button_root_v7mbu Button_primary_v7mbu"
              >
                Online Event
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant={eventData.location === 'To Be Announced' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faQuestionCircle} />}
                onClick={() => handleLocationChange('To Be Announced')}
                className="Button_root_v7mbu Button_ghost_v7mbu"
              >
                To Be Announced
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {eventData.location === 'Venue' && (
          <Grid item xs={12}>
            <Autocomplete
              onLoad={(autocomplete) => {
                autocomplete.setFields(['formatted_address']);
                autocomplete.addListener('place_changed', () => handlePlaceSelect(autocomplete));
              }}
            >
              <TextField
                label="Venue Location"
                name="venueLocation"
                value={eventData.venueLocation}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </InputAdornment>
                  ),
                }}
                helperText="Powered by Google"
                required
              />
            </Autocomplete>
            {!eventData.showAdditionalFields && (
              <Button
                variant="text"
                onClick={handleAddLocationDetails}
                className="Button_root_v7mbu Button_ghost_v7mbu"
              >
                Add location details
              </Button>
            )}
            {eventData.showAdditionalFields && (
              <Grid container spacing={2} style={{ marginTop: 16 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Street Address"
                    name="streetAddress"
                    value={eventData.streetAddress}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Region"
                    name="region"
                    value={eventData.region}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Event Venue"
                    name="eventVenue"
                    value={eventData.eventVenue}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        )}

        {eventData.location === 'Online Event' && (
          <Grid item xs={12}>
            <TextField
              label="Meeting Link"
              name="meetingLink"
              value={eventData.meetingLink}
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faGlobe} />
                  </InputAdornment>
                ),
              }}
              required
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
        <TextField
          label="Price"
          name="price"
          type="number"
          value={eventData.price}
          onChange={handleChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                ₹
              </InputAdornment>
            ),
          }}
          required
        />
      </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Seat Limit"
            name="seatLimit"
            type="number"
            value={eventData.seatLimit}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="poster-upload"
            style={{ display: 'none' }}
          />
          <label htmlFor="poster-upload">
            <Button
              variant="contained"
              component="span"
              className="Button_root_v7mbu Button_primary_v7mbu"
            >
              Upload Poster
            </Button>
          </label>
          {posterPreview && (
            <div>
              <img src={posterPreview} alt="Poster Preview" style={{ maxWidth: '100%', marginTop: 16 }} />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="Button_root_v7mbu Button_primary_v7mbu"
          >
            Create Event
          </Button>
          
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateEventPage;
