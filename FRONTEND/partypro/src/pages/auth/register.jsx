import { useState } from 'react';
import '../../assets/css/register.css';
import { FaUser, FaLock} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    alert("Register Successfully");
    navigate('/login');
    try{
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
  
      if (!validatePassword(password)) {
        alert('Invalid password. It should be 8 characters with at least one special character, one digit, and one capital character.');
        return;
      }
      
    }
    catch(error){
      alert("Failed");
    }

    

    
  };

  return (
    <div className="login-wrap">
      <div className='wrapper'>
        <form >
          <h1>Register</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='First Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          {/* <div className='input-box'>
            <input
              type='text'
              placeholder='Phone Number'
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <MdPermPhoneMsg className='icon' />
          </div> */}
          <div className='input-box'>
            <input
              type='email'
              placeholder='Email Address'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className='icon' />
          </div>
          {/* <div className='input-box'>
            <input
              type='date'
              placeholder='Birthday Date'
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <FaBirthdayCake className='icon' />
          </div> */}
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
          </div>

          <button type='button' onClick={handleSubmit}>Register</button>
          <div className='register-link'>
            <p>
              Already have an account? <a href='/login'>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;