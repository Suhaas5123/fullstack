import { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from '../../components/ui/sidebar';
import Footer from '../../components/ui/footer';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const StyledCard = styled(Card)`
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px; /* Adjust card width as needed */
  margin-bottom: 20px; /* Adjust margin as needed */
`;



const CardActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookedEventsCard = () => {
  const user = useSelector(selectUser)
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const deleteEvent = (index) => {
    // Implement your delete logic here
    console.log(`Deleting event at index ${index}`);
  };

  // Static event data
  const events = [
    {
      eventName: 'Birthday Party',
      eventDate: '2024-02-25',
      eventDescription: 'A birthday party is a special occasion to celebrate the anniversary of someone\'s birth. It often involves gathering with friends and family, eating cake, and giving gifts.',
    },
    {
      eventName: 'Reception Party',
      eventDate: '2024-03-10',
      eventDescription: 'A reception party is a celebration held after a wedding ceremony to honor the newly married couple.',
    },
    {
      eventName: 'Graduation Party',
      eventDate: '2024-05-15',
      eventDescription: 'A graduation party is a celebration held to honor and commemorate the academic achievements of students who have completed their studies and graduated from an educational institution.',
    }
  ];

  return (
    <>
      {user && <SideBar />}
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
        {events.map((event, index) => (
          <StyledCard key={index} onClick={toggleDetails}>
            <CardContent>
              <Typography variant="h5" component="div">
                {event.eventName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.eventDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.eventDescription}
              </Typography>
            </CardContent>
            <CardActionsContainer>
              <IconButton onClick={() => deleteEvent(index)}>
                <DeleteIcon />
              </IconButton>
            </CardActionsContainer>
          </StyledCard>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BookedEventsCard;
