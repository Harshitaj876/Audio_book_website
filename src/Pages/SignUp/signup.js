import React from "react";
import '../Login/login.css';
import LoginImage from '../../Assets/Login_Image.svg';
import GoogleColored from '../../Assets/Google_colored.svg';
import FacebookColored from '../../Assets/Facebook_colored.svg';
import { Link } from "react-router-dom";

function signup() {
  return (
    <div>
        <div  className='whole'>
          <div className='Login-container'>
            <img src={LoginImage} alt=""></img>
            <div className='Login-section'>
              <h1 className='Primary-Heading'>Create a new account</h1>
              <div className='spacing'>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Username</p>
                    <input type="text" className="input"></input>
                  </div>
                </div>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Email address</p>
                    <input type="email" className="input"></input>
                  </div>
                </div>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Password</p>
                    <input type="password" className="input"></input>
                  </div>
                </div>
                <div className="username-box">
                  <div className="border-box">
                    <p className="username-text">Confirm Password</p>
                    <input type="password" className="input"></input>
                  </div>
                </div>

                  <div className='Remember2'>
                    <input type="checkbox"></input>
                    <h1 className='blackText'>Remember me</h1>
                  </div>

                <button className='primary-button'>SignUp</button>
                <div className='notamember'>
                  <h5 className='blackText'>Already have an account?</h5>
                  <Link to='/login' className='forgot-text' href=''>Login</Link>
                </div>

                <div className="text-with-lines">
                  <div className="horizontal-line"></div>
                  <div className="blackText">or SignUp with</div>
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

export default signup;
