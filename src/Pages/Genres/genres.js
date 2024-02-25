import React from "react";
import '../Genres/genres.css';
import Genres from '../../Assets/Genres.svg';
import { Link, Outlet } from "react-router-dom";
function genres() {
  return (
    <section className="whole">
      <img src={Genres} alt=""></img>
      <div className='featured-authors1'>
            <h5 className='secondary-heading1'>
            Journey Through Genres
            </h5>
            <h1 className='secondary-text1'>Explore, Listen, and Get Lost in Stories!</h1>
            <h1 className='secondary-text1'>
            Whether you seek the adrenaline rush of suspense, the tender embrace of emotions, or the intellectual stimulation of knowledge, our Genres are your compass through these diverse literary landscapes. Immerse yourself in tales that transcend boundaries, offering entertainment, enlightenment, and a deeper connection to the world of storytelling
            </h1>
      </div>

      <div class="col">
        <div class="row-lg-5">
          <Link to="/genres" className="Link_name">Comedy</Link>
          <Link to="/genres/Action" className="Link_name">Action</Link>
          <Link to="/genres/Biography" className="Link_name">Biography</Link>
          <Link to="/genres/Sport" className="Link_name">Sport</Link>
          <Link to="/genres/Horror" className="Link_name">Horror</Link>
          <Link to="/genres/Mystery" className="Link_name">Mystery</Link>
          <Link to="/genres/Drama" className="Link_name">Drama</Link>
          <Link to="/genres/Musical" className="Link_name">Musical</Link>
        </div>
        <div className="col-lg-10"><Outlet/></div>
      </div>
      
     


    </section>
  );
}

export default genres;
