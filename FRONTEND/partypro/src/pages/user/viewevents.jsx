import { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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

const EventDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const EventDetailsContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  overflow: auto;
`;

const ImageWrapper = styled.div`
  height: 200px; /* Adjust image height as needed */
`;

const BookedEventsCard = () => {
  const user = useSelector(selectUser)
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Static event data
  const events = [
    {
      eventName: 'Birthday Party',
      eventDate: '2024-02-25',
      eventDescription: 'A birthday party is a special occasion to celebrate the anniversary of someone\'s birth. It often involves gathering with friends and family, eating cake, and giving gifts.',
      eventAddress: '123 Main St',
      eventTime: '6:00 PM',
      eventCost: '$200',
      applicantAddress: '456 Elm St',
      attendees: '10',
      applicantMobile: '123-456-7890',
      reference: 'John Doe',
      eventThemeId: '123abc',
      eventFoodId: '456def',
      addonId: '789ghi',
      image: '/src/assets/images/logo1.png'
    },
    {
      eventName: 'Reception Party',
      eventDate: '2024-03-10',
      eventDescription: 'A reception party is a celebration held after a wedding ceremony to honor the newly married couple.',
      eventAddress: '456 Elm St',
      eventTime: '7:00 PM',
      eventCost: '$300',
      applicantAddress: '789 Oak St',
      attendees: '20',
      applicantMobile: '987-654-3210',
      reference: 'Jane Doe',
      eventThemeId: 'abc123',
      eventFoodId: 'def456',
      addonId: 'ghi789',
      image: '/src/assets/images/logo1.png'
    },
    {
      eventName: 'Graduation Party',
      eventDate: '2024-05-15',
      eventDescription: 'A graduation party is a celebration held to honor and commemorate the academic achievements of students who have completed their studies and graduated from an educational institution.',
      eventAddress: '789 Oak St',
      eventTime: '6:30 PM',
      eventCost: '$250',
      applicantAddress: '123 Pine St',
      attendees: '15',
      applicantMobile: '555-555-5555',
      reference: 'Joe Bloggs',
      eventThemeId: 'def123',
      eventFoodId: 'ghi456',
      addonId: 'abc789',
      image: '/src/assets/images/logo1.png'
    }
  ];

  return (
    <>
      {user && <SideBar />}
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
        {events.map((event, index) => (
          <StyledCard key={index} onClick={toggleDetails}>
            <ImageWrapper>
              <img src={event.image} alt={event.eventName} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
            </ImageWrapper>
            <CardContent>
              <Typography variant="h5" component="div">
                {event.eventName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.eventDate}
              </Typography>
              {showDetails && (
                <EventDetailsOverlay>
                  <EventDetailsContent>
                    <Typography variant="h6" component="div">
                      Event Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Description:</strong> {event.eventDescription}
                      <br />
                      <strong>Address:</strong> {event.eventAddress}
                      <br />
                      <strong>Time:</strong> {event.eventTime}
                      <br />
                      <strong>Cost:</strong> {event.eventCost}
                      <br />
                      <strong>Applicant Address:</strong> {event.applicantAddress}
                      <br />
                      <strong>Attendees:</strong> {event.attendees}
                      <br />
                      <strong>Applicant Mobile:</strong> {event.applicantMobile}
                      <br />
                      <strong>Reference:</strong> {event.reference}
                      <br />
                      <strong>Theme ID:</strong> {event.eventThemeId}
                      <br />
                      <strong>Food ID:</strong> {event.eventFoodId}
                      <br />
                      <strong>Addon ID:</strong> {event.addonId}
                    </Typography>
                  </EventDetailsContent>
                </EventDetailsOverlay>
              )}
            </CardContent>
          </StyledCard>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BookedEventsCard;
