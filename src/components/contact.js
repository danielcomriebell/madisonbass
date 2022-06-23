import Reach, { useState } from "react";
import "../styles/Contact.css"


export default function Contact(){
  return(
    <div className="contact-container">
        <div class="contact-content">
        <div className="social-title"><h1 className="big-font custom">Contact</h1></div>
          <li><a href="mailto:inquiries@madisonbass.com">Email</a> </li>
          <li><a href="https://www.amazon.com/shop/madisonbass__">Shop my amazon favorites</a> </li>
          <li><a href="https://www.amazon.com/hz/wishlist/ls/2ZV7PGCTXC4WU/ref=nav_wishlist_lists_3">Amazon Wishlist</a> </li>
          <li><a href="https://jointhrone.com/u/madisonbass">Send me a gift</a> </li>
          <li><a href="https://www.snapchat.com/add/madisonnbasssxo?sender_web_id=f4767ec7-432d-4974-bef5-ea5a9309a2d0&device_type=desktop&is_copy_url=true">Add me on snapchat</a> </li>
        </div>
    </div>
  )
}
