import  { useState } from 'react';
import '../../assets/css/login.css';
import { FaLock} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { RiAdminFill } from 'react-icons/ri';
// import { Link } from 'react-router-dom';




import { useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  
  // const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
  
     
        if(email.includes('@admin.com'))
        {
          const data = {
            email : email,
            password : password,
            role : "Admin"
          }
         
          // console.log('response',response.data);
          dispatch(login(data));
          navigate('/');
          alert("Login SucessFull");
        }
        else{
          const data = {
            email : email,
            password : password,
            role : "Customer"
          }
          console.log(data);
          
          // console.log('response',response.data);
        dispatch(login(data));
          navigate('/');
        }
      
    }catch(e){
      console.log(e);
    }
    

    
  };

  return (
    <div className="log">
    <div className='login-wrap' >
      <div className='wrapper' >
        <form onSubmit={handleSubmit} style={{width:350, marginLeft:42,height:400}}>
          <h1 style={{marginTop:30}}>Login</h1>
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
          
          <button type='submit' className='loginBtn'>
            Login
          </button>
          <div className='register-link'>
            <p>
              Dont have an account? <a href='/Register'>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;