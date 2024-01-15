import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(!isLoginOpen);
    setSignupOpen(false);
  };

  const handleSignupClick = () => {
    setSignupOpen(!isSignupOpen);
    setLoginOpen(false);
  };
  return (
    <>
      <header>
        <div className="logo"><img src="./images/digialpha.png" alt="" style={{height:"40px",width:"137px"}}/></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Feature Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button onClick={handleLoginClick} className="login">Login</button>
          <button onClick={handleSignupClick} className="signup">Signup</button>
        </div>
      </header>
    </>
  );
};

export default Header;
