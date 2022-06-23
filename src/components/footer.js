import Reach, { useState } from "react";
import "../styles/Footer.css"


export default function footer(){

  const routeToOnlyFans = () =>{
    window.location="https://onlyfans.com/notmb";
  }


  return(

    <div onClick={routeToOnlyFans} className="footer">
      <h1>Exclusive content</h1>
    </div>
  )
}
