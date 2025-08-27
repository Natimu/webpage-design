
import React, {useState, useEffect} from "react"

function Login() {
    const currentYear = new Date().getFullYear();

  return (
    <div className="body">
      <div className="toolbar">
        <img className = "toolbar-logo" alt="logo" src="https://www.gstatic.com/marketing-cms/assets/images/aa/d2/356851cc4224bc17a230a98e6000/chrome.webp=s96-fcrop64=1,00000000ffffffff-rw"></img>
        <ul className="home-toolbar">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="login-container">
        <div className="inner top">
          <div className="profile icon"></div>
          <h2>Login</h2>
          <div>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div className="inner middle"></div>
        <div className="inner bottom"></div>
      </div>
      

      <footer className="footer">
      <p>© {currentYear}  My App. All rights reserved.</p>

        </footer>  </div>  
  );
}

export default Login;
