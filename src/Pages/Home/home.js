import React from "react";
import '../Home/home.css';
import {Link } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa'
import Fa1 from '../../Assets/Featured_Audio_Book 1.svg';
import Fa2 from '../../Assets/Featured_Audio_Book 2.svg';
import Fa3 from '../../Assets/Featured_Audio_Book 3.svg';
import Fa4 from '../../Assets/Featured_Audio_Book 4.svg';
import Fa5 from '../../Assets/Featured_Audio_Book 5.svg';

import T1 from '../../Assets/photo1.svg';
import T2 from '../../Assets/photo2.svg';
import T3 from '../../Assets/photo3.svg';

import fiveStar from '../../Assets/5Star.svg';
import threeStar from '../../Assets/3Star.svg';
import fourStar from '../../Assets/4Star.svg';
import Like from '../../Assets/Like.svg';
import SelectedLike from '../../Assets/Selected_like.svg';

import Lisa from '../../Assets/Lisa Trey.svg';
import ThreeImages from '../../Assets/ThreeImages.svg';
import Work from '../../Assets/How_we_work.svg';
import Symbol from '../../Assets/Symbol.svg';

import logoWhite from '../../Assets/Logo_White.svg';
import EmailAddress from '../../Assets/Email_address.svg';
import PhoneCall from '../../Assets/phone_in_talk.svg';
import Email from '../../Assets/email.svg';
import facebook from '../../Assets/facebook.svg';
import github from '../../Assets/github.svg';
import LinkedIn from '../../Assets/linkedin.svg';
import Location from '../../Assets/location_on.svg';

import HeroSectionImage from '../../Assets/Hero Section Image.svg';

function home() {

  const imageInfo = [
    { src: 'Ellipse 25.svg', text: 'Naoko Mori' },
    { src: 'Ellipse 24.svg', text: 'Chris Hill' },
    { src: 'Ellipse 26.svg', text: 'Sadhguru' },
    { src: 'Ellipse 30.svg', text: 'Pratibha Rai' },
    { src: 'Ellipse 28.svg', text: 'J.K. Rowling' },
    { src: 'Ellipse 29.svg', text: 'Christopher C. Doyle' },
    { src: 'Ellipse 27.svg', text: 'George R.R. Martin' },
    { src: 'Ellipse 31.svg', text: 'Brandon Sanderson' },
    { src: 'Ellipse 32.svg', text: 'Ashneer Grover' },
  ];

  const imageInfoPG = [
    { src: 'Musical.svg', text: 'Musical' },
    { src: 'Drama.svg', text: 'Drama' },
    { src: 'Western.svg', text: 'Western' },
    { src: 'Mystery.svg', text: 'Mystery' },
    { src: 'Sport.svg', text: 'Sport' },
    { src: 'Biography.svg', text: 'Biography' },
    { src: 'Detective.svg', text: 'Detective' },
    { src: 'Horror.svg', text: 'Horror' },
    { src: 'Comedy.svg', text: 'Comedy' },
  ];
  
  return (
  <section>
    <div className="whole">

{/*----------------------Hero Section---------------------*/}
<div className='home-banner-container'>
    <div className='home-text-section'>
        <h5 className='primary-heading'>
        Dive into the World of Audiobooks
        </h5>
        <h5 className='primary-text'>
        Welcome to our Tale Tracks paradise, where stories come to life through the magic of sound. Immerse yourself in a world of captivating narratives, brought to you by talented narrators and authors. Discover, listen, and let your imagination roam free with our audiobooks. Start your listening journey today.
        </h5>
        <div className='two-buttons'>
          <Link to='/library' className="button" >Start Listening<span className="button_icon"><FaArrowRight/></span></Link>
          <Link to='/audiobook' className="Link-button">Explore</Link>
        </div>
    </div>
    <div className='home-banner-image-container'>
        <img src={HeroSectionImage} alt =""/>
    </div>
</div>

{/*----------------------Featured authors and narrators---------------------*/}
<div className="FA">
        <div className='featured-authors'>
            <h5 className='secondary-heading'>
            Featured authors and Narrator
            </h5>
            <h1 className='secondary-text'>
            Meet the voices behind the stories - our featured authors and narrators bring tales to life with their unique talents
            </h1>
        </div>

        <div className="image-container1">
          <div className="row1">
            {imageInfo.slice(0, 5).map((item, index) => (
            <div key={index} className="image-card1">
              <img src={process.env.PUBLIC_URL + '/' + item.src} alt={item.text} />
              <div className="image-text1">{item.text}</div>
            </div>
          ))}
          </div>
          <div className="row1">
            {imageInfo.slice(5, 9).map((item, index) => (
            <div key={index} className="image-card1">
              <img src={process.env.PUBLIC_URL + '/' + item.src} alt={item.text} />
              <div className="image-text1">{item.text}</div>
            </div>
          ))}
          </div>
        </div>

        <div>
          <Link to='/authors' className="button" >Explore more<span className="button_icon"><FaArrowRight/></span></Link>
        </div>

</div>

{/*----------------------Featured audiobooks---------------------*/}
<div className="FA2">
        <div className='featured-authors'>

            <h5 className='secondary-heading2'>
            Featured Audiobooks
            </h5>
            <h1 className='secondary-text2'>
            Dive into captivating tales with our handpicked selection of featured audiobooks
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
                        <img src={Like} alt=""></img>
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
                    <img src={Like} alt=""></img>
                </div>
            </div>
            </div>

            <div className='image-item_fa'>
                <img src={Fa4} alt=""></img>
                <div className='text_box_fa'>
            <div className="title1">Avengers: Infinity</div>
            <div className="description1">
                <div className='blue_written'>Written by:</div>
                <div className='black_by'> J.A. Moore, Marvel</div>
            </div>
            <div className='ig1'>
                <img src={threeStar} alt=""></img>
                <img src={SelectedLike} alt=""></img>
            </div>
            </div>
            </div>

            <div className='image-item_fa'>
                <img src={Fa3} alt=""></img>
                <div className='text_box_fa'>
            <div className="title1">Project Hail Mary</div>
            <div className="description1">
                <div className='blue_written'>Written by:</div>
                <div className='black_by'> Andy Weir</div>
            </div>
            <div className='ig1'>
                <img src={fiveStar} alt=""></img>
                <img src={Like} alt=""></img>
            </div>
            </div>
            </div>

            <div className='image-item_fa'>
                <img src={Fa5} alt=""></img>
                <div className='text_box_fa'>
            <div className="title1">Rich dad poor dad</div>
            <div className="description1">
                <div className='blue_written'>Written by:</div>
                <div className='black_by'> R.T. Kiyosaki</div>
            </div>
            <div className='ig1'>
                <img src={fourStar} alt=""></img>
                <img src={Like} alt=""></img>
            </div>
            </div>
            </div>
            
        </div>

        <div>
          <Link to='/audiobook' className="button" >Explore more<span className="button_icon"><FaArrowRight/></span></Link>
        </div>

</div>

{/*----------------------Popular Genres---------------------*/}
<div className="FA3">
        <div className='featured-authors'>

            <h5 className='secondary-heading2'>
            Popular Genres
            </h5>
            <h1 className='secondary-text2'>
            Explore worlds within words with our diverse audiobook genres
            </h1>
            
        </div>

        <div className="image-container2">
          <div className="row1">
            {imageInfoPG.slice(0, 5).map((item, index) => (
            <div key={index} className="image-card1">
              <img src={process.env.PUBLIC_URL + '/' + item.src} alt={item.text} />
              <div className="image-text1">{item.text}</div>
            </div>
            ))}
          </div>
          <div className="row1">
            {imageInfoPG.slice(5, 9).map((item, index) => (
            <div key={index} className="image-card1">
              <img src={process.env.PUBLIC_URL + '/' + item.src} alt={item.text} />
              <div className="image-text1">{item.text}</div>
            </div>
            ))}
          </div>
        </div>

        <div>
          <Link to='/genres' className="button" >Explore more<span className="button_icon"><FaArrowRight/></span></Link>
        </div>

</div>

{/*----------------------Testimonials---------------------*/}
<div className="FA4">
        <div className='featured-authors'>

            <h5 className='secondary-heading2'>
            Testimonials
            </h5>
            <h1 className='secondary-text2'>
            Hear from our delighted listeners – real voices, real stories, real satisfaction
            </h1>
        </div>

        <div className="testimonial-container">
            <div className="box">
                <div className='testimonial-content'>
                    <img src={T3} alt=""></img>
                </div>
                <div className='testi-text-section2'>
                <h5 className='testi_primary_head2'>
                Halley Frank
                </h5>
                <div className='testi-sub-heading2'>Comedy</div>
                <img src={fiveStar} alt=""></img></div>
                <div className='testimonial-comment'>Tale Tracks is an absolute delight! The narrator's soothing voice brought every character to life, making me feel like I was right there in the story. A truly immersive experience that I can't wait to repeat 😍😍</div>
                <div>
                </div>
            </div>
            <div className="box">
            <div className='testimonial-content'>
                    <img src={T1} alt=""></img>
                </div>
                <div className='testi-text-section2'>
                <h5 className='testi_primary_head2'>
                John Doe
                </h5>
                <div className='testi-sub-heading2'>Biography</div>
                <img src={threeStar} alt=""></img></div>
                <div className='testimonial-comment'>Tale Tracks had its moments of brilliance, but it also had its slow patches 😞 While the narration was generally good, there were instances where the pacing felt a bit off. It was both enjoyable and less captivating moments.</div>
                
            </div>
            <div className="box">
            <div className='testimonial-content'>
                    <img src={T2} alt=""></img>
                </div>
                <div className='testi-text-section2'>
                <h5 className='testi_primary_head2'>
                Arjun Sharma
                </h5>
                <div className='testi-sub-heading2'>Detective</div>
                <img src={fiveStar} alt=""></img></div>
                <div className='testimonial-comment'>I've listened to countless audiobooks, but this one was a standout. The combination of a gripping plot and a talented narrator made it an unforgettable experience. Highly recommended!
Loved Tale Tracks 👍</div>
            </div>
        </div>

        <div className='testimonial-container-big'>
        <div className="big-box">
            <div className='left-image'>
                <img src={Lisa} alt=""></img>
            </div>
            <div className='testi-text-section'>
                <h5 className='testi_primary_head'>
                Lisa Trey
                </h5>
                <div className='testi-sub-heading'>Mystery</div>
                <img src={fiveStar} alt=""></img>
                <div className='gap'>
                <img src={Symbol} alt=""></img>
                </div>
                <h5 className='big_comment'>
                I was thoroughly captivated by this Tale Tracks from start to finish. The narrator's voice was not only pleasing but perfectly matched the mood of the story, enhancing the characters' depth and emotions. The plot was expertly crafted, filled with unexpected twists and turns that kept me on the edge of my seat. I found myself emotionally invested in the characters, cheering for them during their triumphs and empathizing with them during their struggles. This audiobook was an absolute gem, and I can't wait to explore more from there featured author and narrator duo.</h5>
                <img src={ThreeImages} alt=""></img>
            </div>
        </div>
        </div>


</div>

{/*----------------------How-We-Work---------------------*/}
<div className="FA5">
    <div className='featured-authors'>

        <h5 className='secondary-heading2'>
        How we work?
        </h5>
        <h1 className='secondary-text2'>
        Immerse yourself in the world of audiobooks with just a click—simply select, play, and let the narrator transport you into the story.
        </h1>
    </div>
    <div className='testimonial-container1'>
        <img src={Work} alt=""></img>
        <div className="how-we-work-container">
        <div className="box-how-we-work">
            <div className='how-we-work-heading'>Discover</div>
            <div className='how-we-work-comment'>Tale Tracks discover the rich tapestry of audiobook genres, from thrilling adventures to heartwarming tales, and embark on a journey of literary exploration</div>
        </div>
        <div className="box-how-we-work">
            <div className='how-we-work-heading'>Design</div>
            <div className='how-we-work-comment'>Designing your listening pleasure is our passion. We curate a diverse collection of audiobooks, to ensure an engaging and enriching experience</div>
        </div>
        <div className="box-how-we-work">
            <div className='how-we-work-heading'>Develop</div>
            <div className='how-we-work-comment'>Developing your audiobook journey with care, we employ cutting-edge technology and industry expertise to deliver crystal-clear narration with immersive experience</div>
        </div>
        <div className="box-how-we-work">
            <div className='how-we-work-heading'>Deliver</div>
            <div className='how-we-work-comment'>Delivering the magic of storytelling right to your fingertips, we provide seamless and enjoyable listening adventure whenever and wherever you desire</div>
        </div>
    </div>
    </div>
    
</div>

</div>

<div className='blue-box-bg'>
    <div className='text-footer'>
        <img src={logoWhite} alt=""></img>
        <div className='about-company'>© TaleTracks@2023</div>
    </div>
    <div className='text-footer'>
        <div className='text-footer-column'>
            <img src={Location} alt=""></img>
            <div className='about-company-center'>774 Solana Beach, California</div>
        </div>
        <div className='text-footer-column'>
            <img src={PhoneCall} alt=""></img>
            <div className='about-company-center'>+91 5874695210</div>
        </div>
        <div className='text-footer-column'>
            <img src={Email} alt=""></img>
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
            <img src={facebook} alt=""></img>
            <img src={github} alt=""></img>
            <img src={LinkedIn} alt=""></img>
        </div>
    </div>
</div>
  </section>

  );
}

export default home;
