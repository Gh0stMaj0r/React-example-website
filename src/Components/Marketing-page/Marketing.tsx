import React from 'react'

import './Marketing.css'

export default function Marketing() {
    return (
        <section className='marketing'>
            <div className='marketing-text'>
                <h1>Caring is new marketing</h1>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. 
                    See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='image-boxes'>
            <img src="https://uploads-ssl.webflow.com/649e51d2c962420345af3561/64abec03ec963b6c34b45053_smiley-man-working-laptop-from-home.jpg" alt="" className="marketing-image"></img>
            <img src="https://uploads-ssl.webflow.com/649e51d2c962420345af3561/64abebfec8dff88b95afcdcb_rear-view-young-man-working-his-laptop-looking-work-report-graphs.jpg" alt="" className="marketing-image"></img>
            <img src="https://uploads-ssl.webflow.com/649e51d2c962420345af3561/64abeb43480a5f17c089ac34_side-view-young-bearded-man-sitting-his-desk.jpg" alt="" className="marketing-image"></img>
            </div>
            <div className='text-to-image'>
                <div className='box1'>
                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href='' className='box-button'>Learn More...</a>
                </div>
                <div className='box1'>
                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href='' className='box-button'>Learn More...</a>
                </div>
                <div className='box1'>
                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href='' className='box-button'>Learn More...</a>
                </div>
            </div>
        </section>
    )
}