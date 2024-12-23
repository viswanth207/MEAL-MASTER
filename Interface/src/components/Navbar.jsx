import React from 'react';
import './css/Navbar.css'; // Import the CSS file for styling
import logo from '../assets/images/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Adjust the path as needed
    window.location.href = '/login'; // Redirect to the login page or home page
    console.log("Logout clicked");
  };

  const handleLiked = () => {
    window.location.href = '/liked'; // Navigate to liked items
    console.log("Liked clicked");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
         <span className="owner-text">Owned by SAI VISWANTH CHIRUMAMILLA</span>
       
      </div>

      {/* Links */}
      <ul className="nav-links">
        {/* Conditionally render Signup and Login links */}
        {!user || Object.keys(user).length === 0 ? (
          <>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </>
        ) : (
          <>
            {/* Links visible only when user is logged in */}
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/chat">AI Bot</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </>
        )}
      </ul>

      <div className="profile-menu">
        {user && Object.keys(user).length > 0 && (
          <>
            <img
              src="https://via.placeholder.com/40" // Placeholder avatar, replace with actual user image
              alt="avatar"
              className="avatar"
            />
            <div className="dropdown">
              <div onClick={handleLiked}>Liked</div>
              <div onClick={handleLogout}>Logout</div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
