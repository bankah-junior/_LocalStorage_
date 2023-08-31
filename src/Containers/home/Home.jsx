import React from 'react'
// import { nameArray, emailArray, passwordArray } from '../../constants/constants';

const Home = () => {
    // const names = JSON.parse(localStorage.getItem('names')) || [];  // Getting the names from the Local Storage
    // const emails = JSON.parse(localStorage.getItem('emails')) || [];  // Getting the emails from the Local Storage
    // const passwords = JSON.parse(localStorage.getItem('passwords')) || [];  // Getting the passwords from the Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];  // Getting the users from the Local Storage
  
    return (
      <>
        <center className='p-8'> <h1 className='text-2xl md:text-4xl font-bold'>Registered Users</h1> </center>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (   // Looping and displaying all users from the Local Storage
              <tr key={index}>
                <td>{users.indexOf(user)}</td>  {/* Geting index from users */}
                <td>{user.name}</td>            {/* Getting name from users */}
                <td>{user.email}</td>           {/* Getting email from users */}
                <td>{user.password}</td>        {/* Getting passwords from users */}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Home