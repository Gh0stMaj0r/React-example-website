import React from 'react';

import './Header.css'

export default function Header() {
    return(
        <div className="header">
            <img src='/Images/Logo.png' className='logo'></img>
        <div className='header-center'>
            <a href="#home">Home</a>
            <a href="#contact">Service</a>
            <a href="#about">Feature</a>
            <a href="#about">Product</a>
            <a href="#about">Testimonial</a>
            <a href="#about">FAQ</a>
        </div>
        <div className="header-right">
            <a href="#contact">Login</a>
            <a href="#about">Sign up</a>
        </div>
    </div>
    )
}