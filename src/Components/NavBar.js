import React from "react";
import { links } from "../data";
import {NavLink, Link } from "react-router-dom";
import "./NavBar.css"
import Logo from '../Assets/Logo.jpg';
import {FaArrowRight} from 'react-icons/fa'

function NavBar() {
  return (
    <nav className="nav">
      <div><img src={Logo} alt=""/></div>


      <div className="Menu">
        <ul className="Nav_List">
          {links.map(({name, path}, index) =>{
            return(
              <li className="nav_item" key ={index}>
                <NavLink to={path} className="nav-link">
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="Menu2">
      <Link to='/login' className="nav_name">Login</Link>
      <span className="Line"></span>
      <Link to='/signup' className="nav_name">Sign Up</Link>
      <Link to='/library' className="button" >Explore <span className="button_icon"><FaArrowRight/></span></Link>
      </div>

    </nav>
  );
}

export default NavBar;
