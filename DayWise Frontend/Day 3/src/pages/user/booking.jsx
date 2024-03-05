// import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../../assets/css/BookEvents.css';
import Footer from '../../components/ui/footer';
import SideBar from '../../components/ui/sidebar';
// import { Link } from 'react-router-dom';
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Booking = () => {
  const user = useSelector(selectUser);
//   const [formData, setFormData] = useState({
//     eventName: '',
//     applicantAddress: '',
//     attendees: '',
//     applicantMobile: '',
//     reference: '',
//     eventAddress: '',
//     eventDescription: '',
//     eventDate: '',
//     eventTime: '',
//     eventThemeId: '',
//     eventFoodId: '',
//     addonId: '',
//     eventCost: ''
//   });

  // State variables to store dropdown options
//   const [themeOptions, setThemeOptions] = useState([]);
//   const [foodOptions, setFoodOptions] = useState([]);
//   const [addonOptions, setAddonOptions] = useState([]);

//   useEffect(() => {
    
//     const fetchDropdownOptions = async () => {
//       try {
        
//         const themeResponse = await axios.get('http://localhost:8080/admin/get-all-themes');
//         setThemeOptions(themeResponse.data);

        
//         const foodResponse = await axios.get('http://localhost:8080/admin/get-all-foods');
//         setFoodOptions(foodResponse.data);

        
//         const addonResponse = await axios.get('http://localhost:8080/admin/get-all-addons');
//         setAddonOptions(addonResponse.data);
//       } catch (error) {
//         console.error('Error fetching dropdown options:', error);
//       }
//     };

//     fetchDropdownOptions();
//   }, []); 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
    
//     if (e.target.type === 'select-one') {
//       setFormData({
//         ...formData,
//         [name]: parseInt(value) 
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Event Booked");

    // try {
    //   const response = await axios.post('http://localhost:8080/user/add-event/'+user.email, formData);
    //   console.log('Response:', response.data);
      
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert("Failed");
      
    // }
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
            <form >
              <div className='book-input-box'>
                <input type='text' name='eventName' placeholder='Event Name'required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantAddress' placeholder='Applicant Address'  required />
              </div>
              <div className='book-input-box'>
                <input type='number' name='attendees' placeholder='Number of Attendees'required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantMobile' placeholder='Applicant Mobile'required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='reference' placeholder='Where did you hear about us?'required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventAddress' placeholder='Event Address' required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventDescription' placeholder='Event Description' required />
              </div>
              <div className='book-input-box'>
                <input type='date' name='eventDate' placeholder='Event Date' required />
              </div>
              <div className='book-input-box'>
                <input type='time' name='eventTime' placeholder='Event Time' required />
              </div>
              
             
              <div className='book-input-box'>
                <select name='eventThemeId'>
                  <option value='1'>Select Event Theme</option>
                  {/* {themeOptions.map(theme => (
                    <option key={theme.themeId} value={theme.themeId}>{theme.themeName}</option>
                  ))} */}
                   <option value='1'>1</option>
                  <option value='2'></option>
                </select>
              </div>

              
              <div className='book-input-box'>
                <select name='eventFoodId'>
                  <option value='1'>Select Food Menu</option>
                  {/* {foodOptions.map(food => (
                    <option key={food.foodId} value={food.foodId}>{food.foodName}</option>
                  ))} */}
                   <option value='1'>1</option>
                  <option value='2'></option>
                </select>
              </div>

              
              <div className='book-input-box'>
                <select name='addonId'>
                  <option value='1'>Select Event Addon</option>
                  {/* {addonOptions.map(addon => (
                    <option key={addon.addonId} value={addon.addonId}>{addon.addonName}</option>
                  ))} */}
                  <option value='1'>1</option>
                  <option value='2'></option>
                </select>
              </div>

              <br />
              <br />
              <button onClick={handleSubmit} type='submit'>Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <Footer/>
    </>
  );
};

export default Booking;