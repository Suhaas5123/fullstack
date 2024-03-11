import  { useState } from 'react';
import '../../assets/css/login.css';
import { FaLock} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { RiAdminFill } from 'react-icons/ri';
// import { Link } from 'react-router-dom';



import { useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import UserService from '../../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
  
  const notifyError = (message) => toast.error(message);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
  
     
        if(email.includes('@admin.com'))
        {
          const response = await UserService.LoginUser({
            email:email,
            password:password,
            role:"user"
          });
          console.log(response);
          if(response.data.token === "Invalid Credentials"){
            notifyError("Enter Valid Credentials");
            return;
          }
          dispatch(
            login({
              email: email,
              password: password,
              token:response.data.token,
              role:"Admin",
              loggedIn: true
            })
          )
          alert("Login SucessFull");
        }
        else{
          const response = await UserService.LoginUser({
            email:email,
            password:password,
            role:"user"
          });
          console.log(response);
          if(response.data.token === "Invalid Credentials"){
            return;
          }
          dispatch(
            login({
              email: email,
              password: password,
              token:response.data.token,
              role:"Customer",
              loggedIn: true
            })
            )
            
            navigate('/');
          }
          
        }catch(e){
         notifyError("Enter Valid Credentials");
      console.log(e);
    }
    

    
  };

  return (
    <>
      <ToastContainer/>
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
    </>
  );
};

export default Login;