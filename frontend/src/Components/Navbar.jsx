import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const userRole = Cookies.get('userRole');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
            {userRole && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-todo">Add Todo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todo-list">Todo List</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
