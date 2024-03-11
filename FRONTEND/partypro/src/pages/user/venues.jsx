import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import SideBar from '../../components/ui/sidebar';
import Footer from '../../components/ui/footer';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const venueData = [
  {
    name: 'Grand Ballroom',
    description: 'A luxurious and spacious ballroom perfect for weddings, receptions, and corporate events.',
    image: '/src/assets/images/logo1.png',
  },
  {
    name: 'Garden Pavilion',
    description: 'An elegant outdoor venue surrounded by lush greenery, ideal for garden weddings and outdoor parties.',
    image: '/src/assets/images/logo1.png',
  },
  {
    name: 'Rooftop Terrace',
    description: 'A stunning rooftop venue with panoramic views of the city skyline, suitable for cocktail parties and social gatherings.',
    image: '/src/assets/images/logo1.png',
  },
];

const BookingVenues = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {user && <SideBar />}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '100px' }}>
        {venueData.map((venue, index) => (
          <div key={index} style={{ flex: '0 0 33.333%', maxWidth: '33.333%', padding: '10px' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={venue.image}
                  alt={venue.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {venue.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {venue.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* Use Link component to navigate to the booking form page */}
                <Button size="small" color="primary" component={Link} to="/booking">
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BookingVenues;
