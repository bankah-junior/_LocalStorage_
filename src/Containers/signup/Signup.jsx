import React from 'react';
import { useState, useEffect  } from 'react';
import { Link,useHistory } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [passwords, setPasswords] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];          // Getting users item from Local Storage
    const storedNames = JSON.parse(localStorage.getItem('names')) || [];          // Getting names item from Local Storage
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];        // Getting emails item from Local Storage
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];  // Getting passwords item from Local Storage
    setUsers(storedUsers);                                                        // Updating Users Array
    setNames(storedNames);                                                        // Updating Names Array
    setEmails(storedEmails);                                                      // Updating Emails Array
    setPasswords(storedPasswords);                                                // Updating Passwords Array
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      const newUser = { name, email, password };
      const newName = { name };
      const newEmail = { email };
      const newPassword = { password };
      const updatedUsers = [...users, newUser];
      const updatedNames = [...names, newName];
      const updatedEmails = [...emails, newEmail];
      const updatedPasswords = [...passwords, newPassword];
      setUsers(updatedUsers);
      setNames(updatedNames);
      setEmails(updatedEmails);
      setPasswords(updatedPasswords);
      localStorage.setItem('users', JSON.stringify(updatedUsers));            // Setting users item into Local Storage
      localStorage.setItem('names', JSON.stringify(updatedNames));            // Setting names item into Local Storage
      localStorage.setItem('emails', JSON.stringify(updatedEmails));          // Setting emails item into Local Storage
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords));    // Setting passwords item into Local Storage
      setName('');
      setEmail('');
      setPassword('');
      alert('Registered Successfully!!')
      history.push('/home');  // Redirecting to home page
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>Register</h1>
          <p className='p-4 border-l-8 border-t-2 border-b-2 border-r-2 border-red-600'>Please fill in this form to be added to our database.</p>
          <hr/>

          <label for="name"><b>Name</b></label>
          <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />

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
          <p>By creating an account you agree to our <a href="#home">Terms & Privacy</a>.</p>
          <br />
          <p>Already having an account? <Link to="/login">Login</Link> Now.</p>
          <br />

          <button type="submit" class="registerbtn">Register</button>
        </div>
      </form>

    </div>
  );

}

export default Signup