import React from 'react'
import './Booking.css'
import logo180 from '../../media/180.png'
import logoDacru from '../../media/dacru.png'

const Booking = () => {
    return (
        <section>
            <div className="booking-container">
                <h3 className="booking-text">Booking</h3>
                <div className="booking-logos">
                    <img src={logo180} alt="logo-180"/>
                    <img src={logoDacru} alt="logo-180"/>
                    <img src={logo180} alt="logo-180"/>
                    
                </div>
                <div className="booking-logos">
                    <img src={logo180} alt="logo-180"/>
                    <img src={logoDacru} alt="logo-180"/>
                    <img src={logo180} alt="logo-180"/>
                    
                </div>
            </div>
        </section>
    )
}

export default Booking
