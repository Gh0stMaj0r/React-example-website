import React from 'react';

import './Landing.css'

export default function Landing() {
    return (
        <>
        <div className='landing'>
            <div className='home'>
                <h1>Lessons and insights <br></br><span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className='register'>Register</button>
            </div>
            <div>
                <img className='image' src='./Images/Illustration.png'></img>
            </div>
        </div>
        <div className='dots'>
            <span className='dot' id='active'></span>
            <span className='dot'></span>
            <span className='dot'></span>
        </div>
        
        </>
    )
}