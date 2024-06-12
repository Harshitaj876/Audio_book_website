import React from 'react'
import '../SplashScreen/splash.css'
import Icon from '../Assets/LogoIcon.png'

const Splash = () => {
  return (
    <div className="splash-container">
      <img className='logo' src={Icon} alt=''></img>
      <div className="text-left">Tale</div>
      <div className="text-right">Tracks</div>
    </div>
  )
}

export default Splash