import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import SideBar from '../../components/ui/sidebar';
import Footer from '../../components/ui/footer';

const partyData = [
  {
    type: 'Reception Party',
    description: 'A reception party is a celebration held after a wedding ceremony to honor the newly married couple.',
    image: '/src/assets/images/logo1.png',
  },
  {
    type: 'Cultural Party',
    description: 'A cultural party is an event that showcases the traditions, customs, and heritage of a particular community or society.',
    image: '/src/assets/images/logo1.png',
  },
  {
    type: 'Birthday Party',
    description: 'A birthday party is a special occasion to celebrate the anniversary of someone\'s birth. It often involves gathering with friends and family, eating cake, and giving gifts.',
    image: '/src/assets/images/logo1.png',
  },
  {
    type: 'Anniversary Party',
    description: 'An anniversary party is a celebration held to commemorate the anniversary of a significant event, such as a wedding or the founding of a company.',
    image: '/src/assets/images/logo1.png',
  },
  {
    type: 'Beach Party',
    description: 'A beach party is a casual gathering held on a beach, often featuring activities such as swimming, sunbathing, beach games, and picnicking.',
    image: '/src/assets/images/logo1.png',
  },
  {
    type: 'Graduation Party',
    description: 'A graduation party is a celebration held to honor and commemorate the academic achievements of students who have completed their studies and graduated from an educational institution.',
    image: '/src/assets/images/logo1.png',
  },
];

export default function Events() {
    const user = useSelector(selectUser);
  return (
    <>
    {user && <SideBar/>}
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '100px' }}>
      {partyData.map((party, index) => (
        <div key={index} style={{ flex: '0 0 33.333%', maxWidth: '33.333%', padding: '10px' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={party.image}
                alt={party.type}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {party.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {party.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* Use Link component to navigate to the booking form page */}
              <Button size="small" color="primary" component={Link} to="/venues">
                Book Now
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
