import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/BookEvents.css';
import Footer from '../../components/ui/footer';
import SideBar from '../../components/ui/sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Booking = () => {
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    eventName: '',
    applicantAddress: '',
    attendees: '',
    applicantMobile: '',
    reference: '',
    eventAddress: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventThemeId: '',
    eventFoodId: '',
    addonId: '',
    eventCost: ''
  });
  const [themeOptions, setThemeOptions] = useState([]);
  const [foodOptions, setFoodOptions] = useState([]);
  const [addonOptions, setAddonOptions] = useState([]);

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const themeResponse = await axios.get('http://localhost:8080/admin/get-all-themes');
        setThemeOptions(themeResponse.data);

        const foodResponse = await axios.get('http://localhost:8080/admin/get-all-foods');
        setFoodOptions(foodResponse.data);

        const addonResponse = await axios.get('http://localhost:8080/admin/get-all-addons');
        setAddonOptions(addonResponse.data);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };

    fetchDropdownOptions();
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/add-event/' + user.email, formData);
      console.log('Response:', response.data);
      alert("Event Booked");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed");
    }
  };

  return (
    <>
      {user && <SideBar />}
      <br />
      <br />
      <br />
      <div className='booking'>
        <div className='booking_form'>
          <br />
          <div className='booking_form_1'>
            <h1>
              <b>Book Your Event</b>
            </h1>
            <div className="underline"></div>
            <br />
            <br />
            <form className='form34'>
              <div className='book-input-box'>
                <input type='text' name='eventName' placeholder='Event Name' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantAddress' placeholder='Applicant Address' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='number' name='attendees' placeholder='Number of Attendees' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantMobile' placeholder='Applicant Mobile' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='text' name='reference' placeholder='Where did you hear about us?' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventAddress' placeholder='Event Address' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventDescription' placeholder='Event Description' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='date' name='eventDate' placeholder='Event Date' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <input type='time' name='eventTime' placeholder='Event Time' required onChange={handleChange} />
              </div>
              <div className='book-input-box'>
                <select name='eventThemeId' onChange={handleChange}>
                  <option value=''>Select Event Theme</option>
                  {themeOptions.map(theme => (
                    <option key={theme.themeId} value={theme.themeId}>{theme.themeName}</option>
                  ))}
                </select>
              </div>
              <div className='book-input-box'>
                <select name='eventFoodId' onChange={handleChange}>
                  <option value=''>Select Food Menu</option>
                  {foodOptions.map(food => (
                    <option key={food.foodId} value={food.foodId}>{food.foodName}</option>
                  ))}
                </select>
              </div>
              <div className='book-input-box'>
                <select name='addonId' onChange={handleChange}>
                  <option value=''>Select Event Addon</option>
                  {addonOptions.map(addon => (
                    <option key={addon.addonId} value={addon.addonId}>{addon.addonName}</option>
                  ))}
                </select>
              </div>
              <div className='book-input-box'>
                <input type='number' name='eventCost' placeholder='Event Cost' required onChange={handleChange} />
              </div>
              <br />
              <br />
              <button type='submit' onClick={handleSubmit}>Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Booking;
