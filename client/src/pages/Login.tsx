import { useState, FormEvent, ChangeEvent } from 'react';
import { signup } from '../api/authAPI.js';
import Auth from '../utils/auth.js';
import { login } from '../api/authAPI.js';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
    email: string;
  }>({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = isSignup
        ? await signup(formData) // Call signup function if in signup mode
        : await login(formData);  // Call login function otherwise

      Auth.login(data.token);
    } catch (err) {
      alert(isSignup ? 'Signup failed' : 'Login failed');
      console.error(`Failed to ${isSignup ? 'signup' : 'login'}`, err);
    }
  };

  return (
    <div className='container'>
      <div className="columns is-centered">
        <div className="column is-half">
          <form className='box' onSubmit={handleSubmit}>
            <h1 className="title is-3 has-text-link has-text-centered">
              {isSignup ? 'Sign Up' : 'Login'}
            </h1>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="username"
                  value={formData.username || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {isSignup && (
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={formData.password || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered mt-4">
              <p className="control">
                <button className="button is-link" type="submit">
                  {isSignup ? 'Sign Up' : 'Login'}
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-link is-light is-outlined"
                  type="button"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? 'Already have an account? Log in' : 'Need an account? Sign up'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
