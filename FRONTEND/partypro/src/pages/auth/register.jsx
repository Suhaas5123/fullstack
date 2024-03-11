import { useState } from 'react';
import '../../assets/css/register.css';
import { FaUser, FaLock} from 'react-icons/fa';
import { MdEmail, MdPermPhoneMsg } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserService from '../../services/UserService';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notifyError = message => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.RegisterUser({
        name: name,
        email: email,
        password: password,
        mobilenumber:mobilenumber,
        userRole: "user"
      });

      if (response.data.token === undefined || response.data.token === "Email already exists") {
        notifyError("Email already exists");
        return;
      }

      dispatch(
        login({
          email: email,
          password: password,
          token: response.data.token,
          role: "Customer",
          loggedIn: true,
        })
      );

      alert("Registration successful");
      navigate('/');
    } catch (error) {
      console.error("Registration failed:", error.response.da);
      notifyError("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="login-wrap">
      <ToastContainer/>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
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
          <div className='input-box'>
            <input
              type='text'
              placeholder='Phone Number'
              required
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <MdPermPhoneMsg className='icon' />
          </div>
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
          <button type='submit' onClick={handleSubmit}>Register</button>
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
