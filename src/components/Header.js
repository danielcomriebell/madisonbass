import Reach, { useState } from "react";
import "../styles/Header.css"


export default function Header(){

  const [completed, setCompleted] = useState(false);

  const changeState = () =>{
    setCompleted(!completed);
  }

  const routeToOnlyFans = () =>{
    window.location="https://onlyfans.com/notmb";
  }

  const routeToInstagram = () =>{
    window.location="https://www.instagram.com/madisonbass__/";
  }

  const routeToYoutube = () =>{
    window.location="https://www.youtube.com/channel/UCn7vBg_9AjfMSsMVQD6Dj7A";
  }

  const routeToTwitter = () =>{
    window.location="https://twitter.com/madisonbass__";
  }

  const routeToTikTok = () =>{
    window.location="https://www.tiktok.com/@madison_bass";
  }

  const routeToPinterest = () =>{
    window.location="https://www.pinterest.com/madisonbass_/_created/";
  }


  return(

    <div className="header-container">
      <div onClick={changeState} className={completed ? 'header active' : "header"}>
        <svg id="menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.33 149.26">
          <rect  className={completed ? 'menu close' : "menu open"} class="top" width="348.33" height="28.7"/>
          <rect  className={completed ? 'menu close' : "menu open"} class="middle" y="60.28" width="348.33" height="28.7"/>
          <rect  className={completed ? 'menu close' : "menu open"} class="bottom" y="120.56" width="348.33" height="28.7"/>
        </svg>
        <h1>Madison Bass</h1>
      </div>

      <div className={completed ? 'header-container-m show' : "header-container-m inactive"}>
        <div className="menu-content">
          <li onClick={routeToOnlyFans}>OnlyFans</li>
          <li onClick={routeToYoutube}>Youtube</li>
          <li onClick={routeToInstagram}>Instagram</li>
          <li onClick={routeToTwitter}>Twitter</li>
          <li onClick={routeToTikTok}>TikTok</li>
          <li onClick={routeToPinterest}>Pinterest</li>
        </div>
      </div>
    </div>
  )
}