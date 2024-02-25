import React from "react";
import '../Login/login.css';
import LoginImage from '../../Assets/Login_Image.svg';
import GoogleColored from '../../Assets/Google_colored.svg';
import FacebookColored from '../../Assets/Facebook_colored.svg';
import { Link } from "react-router-dom";

function login() {
  return (
    <div>
        <div  className='whole'>
          <div className='Login-container'>
            <img src={LoginImage} alt=''></img>
            <div className='Login-section'>
              <h1 className='Primary-Heading'>Login to your account</h1>
              <div className='spacing'>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Username</p>
                    <input type="text" className="input"></input>
                  </div>
                </div>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Password</p>
                    <input type="password" className="input"></input>
                  </div>
                </div>

                <div className='space-between'>
                  <div className='Remember'>
                    <input type="checkbox"></input>
                    <h1 className='blackText'>Remember me</h1>
                  </div>
                  <a className='forgot-text' href="forgot" >Forgot password?</a>
                </div>

                <button className='primary-button'>Login</button>
                <div className='notamember'>
                  <h5 className='blackText'>Not a member yet?</h5>
                  <Link to='/signup' className='forgot-text' href=''>Register</Link>
                </div>

                <div className="text-with-lines">
                  <div className="horizontal-line"></div>
                  <div className="blackText">or Login with</div>
                  <div className="horizontal-line"></div>
                </div>

                <div className='orLogin'>
                  <img src={GoogleColored} alt=""></img>
                  <img src={FacebookColored} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default login;
