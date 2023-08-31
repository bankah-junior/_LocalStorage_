import React from 'react';
import { useState  } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      const emails = JSON.parse(localStorage.getItem('emails')) || [];  // Getting the emails from the Local Storage
      const passwords = JSON.parse(localStorage.getItem('passwords')) || [];  // Getting the passwords from the Local Storage
      // const users = JSON.parse(localStorage.getItem('users')) || [];  // Getting the users from the Local Storage
      setEmail('');
      setPassword('');
      
      emails.forEach((val, i, arr) => {         // Looping through the emails Array
        
        if(val.email === email) {               // Checking if input from user matched an item in emails Array
          passwords.forEach((pval, i, arr) => { // Looping through the passwords Array

            if(pval.password === password) {    // Checking if input from user matched an item in password Array
              alert('Successfully Logged In!!');
              history.push('/home');    // Redirecting to home page
            }
          })
        }
      })
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>Login</h1>
          <p className='p-4 border-l-8 border-t-2 border-b-2 border-r-2 border-red-600'>Please fill in this form to be logged in.</p>
          <hr/>

          <label for="psw"><b>Email</b></label>
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

          <label for="psw"><b>Password</b></label>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />

          <hr/>
          <p>Not having an account? <Link to="/signup">Register</Link> Now.</p>
          <br />

          <button type="submit" class="registerbtn">Login</button>
        </div>
      </form>
        
    </div>
  )
}

export default Login