import React from "react";
import '../Library/library.css';
import logoWhite from '../../Assets/Logo_White.svg';
import { Link } from "react-router-dom";
import Library_image from '../../Assets/Library_home.svg';
import Fa1 from '../../Assets/Featured_Audio_Book 1.svg';
import Fa2 from '../../Assets/Featured_Audio_Book 2.svg';
import Fa6 from '../../Assets/Featured_Audio_Book 6.svg';
import Fa7 from '../../Assets/Featured_Audio_Book 7.svg';
import Fa8 from '../../Assets/Featured_Audio_Book 8.svg';
import fiveStar from '../../Assets/5Star.svg';
import threeStar from '../../Assets/3Star.svg';
import fourStar from '../../Assets/4Star.svg';
import {FaArrowRight} from 'react-icons/fa'
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import fortymins from '../../Assets/48mins.svg';
import fifmin from '../../Assets/fifmin.svg';
import fortymin from '../../Assets/ninmin.svg';
import FA1 from '../../Assets/Featured_Audio_Book 1.svg';
import FA2 from '../../Assets/Featured_Audio_Book 4.svg';
import FA3 from '../../Assets/Featured_Audio_Book 5.svg';
import Sale from '../../Assets/Sale.svg';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import EmailAddress from '../../Assets/Email_address.svg';
import { FaMapMarked } from "react-icons/fa";

function library() {
  return (
    <section className="Library-whole">

      <div className="Library-container">
        <div className="Library-text">
          <h1 className="primary-heading">Unleash Your Audiobook universe!</h1>
          <p className="primary-text">Your audiobook sanctuary is here! 'My Library' is your gateway to a world of captivating tales at your fingertips. Whether you're resuming a beloved story, discovering new adventures, or tracking your listening progress, this is where your audiobook journey finds its home. Explore your personalized collection, organized your way.</p>
          <Link to='/audiobook' className="button">Add to library<span className="button_icon"><FaArrowRight/></span></Link>
        </div>
        <img src={Library_image} alt=""></img>
      </div>

      <div className="libcen">
        <div className="my-library">
          <div className="Left-text">
            <h1>Collections Unleashed!</h1>
            <p>Your treasure Trove of Audiobook Adventures</p>
          </div>
          <div className="Right-symbols">
            <span><FaSearch/></span>
            <span><FaFilter/></span>
            <span><FaSort/></span>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="con">
              <img src={FA3} alt=""></img>
              <div className="row-content">
                <h1>Rich Dad Poor Dad</h1>
                <p>What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do Not!</p>
                <div className="written">
                  <p><span>Written By: </span>Robert T.Kiyosaki</p>
                  <p><span>Length: </span>4hrs and 9mins</p>
                </div>
                <div className="Bar">
                  <p>Your progress</p>
                  <div className="Progress">
                    <h2>39% to complete</h2>
                    <h3><span><FaClock/></span>48mins</h3>
                  </div>
                  <img src={fortymins} alt=""></img>
                </div>
              </div>
            </div>
            
            <ul className="item1">
              <li className="item">
                <div className="icon"><FaHeart/></div>
                <h3 className="name">Like</h3>
              </li>
              <li className="item">
                <div className="icon"><FaPencilAlt/></div>
                <h3 className="name">Edit</h3>
              </li>
              <li className="item">
                <div className="icon"><FaDownload/></div>
                <h3 className="name">Download</h3>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="con">
              <img src={FA1} alt=""></img>
              <div className="row-content">
                <h1>The Happiest Man on Earth</h1>
                <p>The Beautiful Life of an Auschwitz Survivor</p>
                <div className="written">
                  <p><span>Written By: </span>Eddie Jaku</p>
                  <p><span>Length: </span>4hrs and 40mins</p>
                </div>
                <div className="Bar">
                  <p>Your progress</p>
                  <div className="Progress">
                    <h2>20% to complete</h2>
                    <h3><span><FaClock/></span>15mins</h3>
                  </div>
                  <img src={fifmin} alt=""></img>
                </div>
              </div>
            </div>
            <ul className="item1">
              <li className="item">
                <div className="icon"><FaHeart/></div>
                <h3 className="name">Like</h3>
              </li>
              <li className="item">
                <div className="icon"><FaPencilAlt/></div>
                <h3 className="name">Edit</h3>
              </li>
              <li className="item">
                <div className="icon"><FaDownload/></div>
                <h3 className="name">Download</h3>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="con">
              <img src={FA2} alt=""></img>
            <div className="row-content">
              <h1>Avengers: Infinity</h1>
              <p>The Avengers journey into deep space, where they unite the intergalactic races against the Builders</p>
              <div className="written">
                <p><span>Written By: </span> James A. Moore, Marvel</p>
                <p><span>Length: </span>8hrs and 54mins</p>
              </div>
              <div className="Bar">
                <p>Your progress</p>
                <div className="Progress">
                  <h2>60% to complete</h2>
                  <h3><span><FaClock/></span>93mins</h3>
                </div>
                <img src={fortymin} alt=""></img>
              </div>
            </div>
            </div>
            <ul className="item1">
              <li className="item">
                <div className="icon"><FaHeart/></div>
                <h3 className="name">Like</h3>
              </li>
              <li className="item">
                <div className="icon"><FaPencilAlt/></div>
                <h3 className="name">Edit</h3>
              </li>
              <li className="item">
                <div className="icon"><FaDownload/></div>
                <h3 className="name">Download</h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="up">
            <Link to='/authors' className="button" >Show more<span className="button_icon"><FaArrowRight/></span></Link>
          </div>
      </div>

      <div className="FA2">
          <div className='featured-authors'>

              <h5 className='secondary-heading2'>
              Curated Pics
              </h5>
              <h1 className='secondary-text2'>
              Tailored Audiobook Recommendations
              </h1>
              
          </div>


          <div className="image-gallery1">
              <div className='image-item_fa'>
                  <img src={Fa1} alt=""></img>
                  <div className='text_box_fa'>
                      <div className="title1">The Happiest man on Earth</div>
                      <div className="description1">
                          <div className='blue_written'>Written by:</div>
                          <div className='black_by'> Eddie Jaku</div>
                      </div>
                      <div className='ig1'>
                          <img src={fiveStar} alt=""></img>
                          <span><FaPlus/></span>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa'>
                  <img src={Fa2} alt=""></img>
                  <div className='text_box_fa'>
                  <div className="title1">Travels</div>
                  <div className="description1">
                      <div className='blue_written'>Written by:</div>
                      <div className='black_by'> Michael Crichton</div>
                  </div>
                  <div className='ig1'>
                      <img src={threeStar} alt=""></img>
                      <span><FaPlus/></span>
                  </div>
              </div>
              </div>

              <div className='image-item_fa'>
                  <img src={Fa6} alt=""></img>
                  <div className='text_box_fa'>
              <div className="title1">Marvel's Wastelanders</div>
              <div className="description1">
                  <div className='blue_written'>Written by:</div>
                  <div className='black_by'> Marvel, Benjamin</div>
              </div>
              <div className='ig1'>
                  <img src={threeStar} alt=""></img>
                  <span><FaPlus/></span>
              </div>
              </div>
              </div>

              <div className='image-item_fa'>
                  <img src={Fa7} alt=""></img>
                  <div className='text_box_fa'>
              <div className="title1">Mythos</div>
              <div className="description1">
                  <div className='blue_written'>Written by:</div>
                  <div className='black_by'> Stephen Fry</div>
              </div>
              <div className='ig1'>
                  <img src={fiveStar} alt=""></img>
                  <span><FaPlus/></span>
              </div>
              </div>
              </div>

              <div className='image-item_fa'>
                  <img src={Fa8} alt=""></img>
                  <div className='text_box_fa'>
              <div className="title1">Forever and a Day</div>
              <div className="description1">
                  <div className='blue_written'>Written by:</div>
                  <div className='black_by'> Anthony Horowitz</div>
              </div>
              <div className='ig1'>
                  <img src={fourStar} alt=""></img>
                  <span><FaPlus/></span>
              </div>
              </div>
              </div>
              
          </div>

          <div className="up">
            <Link to='/audiobook' className="button" >Show more<span className="button_icon"><FaArrowRight/></span></Link>
          </div>

      </div>
     
      <img className="Sale" src={Sale} alt=""></img>

      <div className='blue-box-bg'>
    <div className='text-footer'>
        <img src={logoWhite} alt=""></img>
        <div className='about-company'>© TaleTracks@2023</div>
    </div>
    <div className='text-footer'>
        <div className='text-footer-column'>
            <span><FaMapMarked/></span>
            <div className='about-company-center'>774 Solana Beach, California</div>
        </div>
        <div className='text-footer-column'>
            <span><FaPhone/></span>
            <div className='about-company-center'>+91 5874695210</div>
        </div>
        <div className='text-footer-column'>
          <span><FaEnvelope/></span>
            <div className='about-company-center'>Support@TaleTracks.com</div>
        </div>
        
    </div>
    <div className='text-footer'>
        <div>About the company</div>
        <div className='about-company'>At Tale Tracks, we're passionate about the power of stories. With a commitment to excellence, we bring the world of literature to life through the art of audiobooks, offering a captivating listening experience that transports you to new worlds and emotions.</div>
        <div className="email-box">
            <div className="left-content">
                <span>Write your email address</span>
            </div>
            <div className="right-content">
                <img src={EmailAddress} alt=""/>
            </div>
        </div>
        <div className='text-footer-column'>
            <span><FaFacebook/></span>
            <span><FaGithub/></span>
            <span><FaLinkedin/></span>
        </div>
    </div>
      </div>
      
    </section>
  );
}

export default library;
