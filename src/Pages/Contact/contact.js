import React from "react";
import '../Contact/contact.css';
import Conatct_us from '../../Assets/Contact_us.svg';
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function contact() {
  return (
    <div>

      <div className="Center">
        <div className="Left">
          <h1>Contact Us</h1>
          <p>Reach out to us - your thoughts matter, and we're here to listen and assist!</p>
          <img src={Conatct_us} alt="" className="image"></img>
        </div>
        <div className="right">
          <div className="border-box2"><input type="text" placeholder="Name" className="field"></input></div>
          <div className="border-box2"><input type="email" placeholder="Email address" className="field"></input></div>
          <div className="border-box2"><input type="number" placeholder="Mobile Number" className="field"></input></div>
          <div className="border-box1"><input type="text" placeholder="Message" className="field"></input></div>

          <button className='primary-button2'>Contact Us now</button>
        </div>
      </div>

      <div className="bottom">

        <div className="icon">
          <div className="map2"><span className="map"><FaMapMarkedAlt/></span></div>
          <div className="info">
            <h1>Location</h1>
            <p>774 Solana Beach, California</p>
          </div>
        </div>

        <div className="icon">
          <div className="map2"><span className="map"><FaEnvelope/></span></div>
          <div className="info">
            <h1>Email Address</h1>
            <p>Support@TaleTracks.com</p>
          </div>
        </div>

        <div className="icon">
          <div className="map2"><span className="map"><FaPhoneAlt/></span></div>
          <div className="info">
            <h1>Mobile number</h1>
            <p>+45 5874695210</p>
          </div>
        </div>


      </div>

    </div>
  );
}

export default contact;
