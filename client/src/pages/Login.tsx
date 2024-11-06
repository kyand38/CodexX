import {useState, FormEvent, ChangeEvent} from 'react';
import { signup } from '../api/authAPI.js';
import Auth from '../utils/auth.js';
import { login } from '../api/authAPI.js';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: ''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...loginData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const data = await login(loginData);
        Auth.login(data.token);
      } catch (err) {
        alert('Login failed')
        console.error('Failed to login', err);
      }
    };
  
    return (
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h1 className="loginH1">Login</h1>
          <label >Username</label>
          <input 
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        <label>Password</label>
          <input 
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
          <button type='submit'>Submit Form</button>
        </form>
      </div>
      
    )
  };
  
  export default Login;
  