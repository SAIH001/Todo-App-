import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'; // Note the correct named import

import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('visitor');

  useEffect(() => {
    // Function to check and set role from cookie
    const checkRole = () => {
      const userData = Cookies.get('userData');
      if (userData) {
        try {
          const decodedToken = jwtDecode(userData);
          setRole(decodedToken.userAuth.userRole);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      } else {
        setRole('visitor');
      }
    };

    // Check role when the component mounts
    checkRole();

    // Optional: Polling interval to check for changes every X milliseconds
    const interval = setInterval(checkRole, 5000); // Check every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once when the component mounts
  

  function logout() {
    console.log("ASd")
    Cookies.remove('userData');
    Cookies.remove('userRole');
    navigate('/login');
  }

  return (
    <>
      {role === 'visitor' && !Cookies.get('userData') ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">TODO APP</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">TODO APP</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/add-todo">Add Todo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todo-list">Todo List</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-danger btn-sm m-1" onClick={logout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
