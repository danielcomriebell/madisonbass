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
          <img src="https://shagmag-cms-dev.s3.us-east-2.amazonaws.com/media/images/large/fb13f83d-d86b-4cff-b56f-60c07b12c141"></img>
        </div>
        <div className="main-title">
          <h1 onClick={routeToShagMag}>Shagmag Article #274</h1>  
        </div>
      </div>
    </div>
  )
}
