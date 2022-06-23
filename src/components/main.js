import Reach, { useState } from "react";
import "../styles/Main.css"

export default function Main(){

  const routeToShagMag = () =>{
    window.location="https://www.shagmag.com/article/274";
  }


  return(

    <div className="main-container">
      {/* <h1></h1> */}
      <div className="main-content">
        <div className="main-title-one">
          <h1>Recent Feature</h1>  
        </div>
        <div className="main-img">
          <img src="https://images.ctfassets.net/3s4313xo0u0s/4oP1ey8AZsydM7GMCQYJ7j/19808abf8db652685fd691a9fb0de8d5/IMG_9960_3.jpg"></img>
        </div>
        <div className="main-title">
          <h1 onClick={routeToShagMag}>Shagmag Article #274</h1>  
        </div>
      </div>
    </div>
  )
}
