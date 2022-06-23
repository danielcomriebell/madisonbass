import Reach, { useState } from "react";
import "../styles/Social.css"

export default function Social(){

  const routeToInstagram = () =>{
    window.location="https://www.instagram.com/madisonbass__/";
  }

  const routeToYoutube = () =>{
    window.location="https://www.youtube.com/channel/UCn7vBg_9AjfMSsMVQD6Dj7A";
  }

  return(
    <div className="social-container">
      <div className="social-title"><h1 className="big-font custom">Social</h1></div>
      <div onClick={routeToInstagram} className="social-title"><h1 className="big-font smaller">Follow me on Instagram</h1></div>
      <div class="grid-container-m">
          <div class="grid-item-m">
            <img src="https://images.ctfassets.net/3s4313xo0u0s/3QpauxYDZWW34OMWUKDAw7/312923640d6c61727feafd793e484632/mad.png"></img>
            <img src="https://images.ctfassets.net/3s4313xo0u0s/7rKBqg0Hbfp7AVtRS7J0T/4d7146da46bc9c4cdda988d02f21d4e4/IMG_2599.jpg"></img>
            <img src="https://images.ctfassets.net/3s4313xo0u0s/2HKJJFIQJn0z0Ebrzq3q3c/59b996b27f228d076fb4008fb7dc1245/IMG_2605.jpg"></img>
            <img src="https://images.ctfassets.net/3s4313xo0u0s/2zGY8NTeGTyxBiOM5ExMMM/b145932cddc993f0ddc60349d3e91058/IMG_2948.jpg"></img>
            <img src="https://images.ctfassets.net/3s4313xo0u0s/5HysXnVTejBQSnYy66evfU/196dd2afb44ba5ff945c5e0f336ea220/IMG_4098.jpg"></img>
            <img src="https://images.ctfassets.net/3s4313xo0u0s/2Y562KyU5Bd4MBhhZiQ9t6/14f6c01e5d57c3181da20e4a982cb900/IMG_4147.jpg"></img>
          </div>
        </div>
      <div onClick={routeToYoutube} className="social-title"><h1 className="big-font smaller">Subscribe to my Youtube</h1></div>
      {/* <div className="social-video"><iframe src="https://www.youtube.com/embed/zXJsVnsvZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
    </div>
  )
}