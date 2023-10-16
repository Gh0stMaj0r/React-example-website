import React from "react";

import './Element.css'

export default function Element() {
    return(
        <div className="learn">
        <img src="https://uploads-ssl.webflow.com/649e51d2c962420345af3561/64aa7729c09d97fe0492c3a3_pana.svg" alt="" className="hero-image"></img>
        <div className="learn2">
            <h1>How to design your site footer like we<br></br>did</h1>
            <p className="text2"> Donec a eros justo. Fusce egestas tristique ultrices. 
                Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. 
                Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
                Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida..</p>
            <button className='register'>Learn More</button>
        </div>
    </div>
    )
}