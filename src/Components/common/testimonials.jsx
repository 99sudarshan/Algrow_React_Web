import React from 'react';
import User from '../../images/user.png';
import Quote from '../../images/quote.svg';

function Testimonials() {
    return (
<div className="testimonials-wrapper">
    <div className="testimonials-img-right-traingle"></div>
        <div className="testimonials-img-left-traingle"></div>
            <div className="testimonials-wrapper-inner">
                <div className="testimonial-slide-image">
                    <img src={User} alt=""/>
                </div>
                <div className="testimonials-slide-text">
                    <div className="icon-quote">
                        <img src={Quote} alt=""/>
                    </div>
                <p>
                    “Algrow helped me to advance my professional learning. For anyone out there thinking about
                    studying online, Algrow provides a great avenue for self-growth; take advantage of it! Just keep
                    yourself busy doing things that will upgrade your knowledge. Every time an opportunity to learn
                    comes your way, always grab it. Algrow has certainly been worth my time.” </p>
                <a href="#" className="btn-blue">See More Testimonials</a>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;
