import React, { useState, useEffect } from 'react';
import Faq from '../../images/faq-icon.svg';
import Facebook from '../../images/facebook-icon.svg';
import Twitter from '../../images/twitter-icon.svg';
import Linkedin from '../../images/linkedin-icon.svg';
import Instagram from '../../images/instagram-icon.svg';
import Tiktok from '../../images/tiktok.svg';
import Youtube from '../../images/youtube-icon.svg';
import Mailbox from '../../images/mailbox-icon.svg';

function About() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div className="main-bg">
            <div className="footer-wrapper">
                <div className="footer-column">
                    <div className="footer-h3">ABOUT ALGROW</div>
                    <ul>
                        <li>
                            <a href="#">Our Story</a>
                        </li>
                        <li>
                            <a href="#">Open Position</a>
                        </li>
                        <li>
                            <a href="#">Algrow Programmes</a>
                        </li>
                        <li>
                            <a href="#">Empower Us</a>
                        </li>
                        <li>
                            <a href="#">How Alrow Works</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Hubs</a>
                        </li>
                        <li>
                            <a href="#">Index</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-h3">LEARNING</div>
                    <ul>
                        <li>
                            <a href="#">Get the App</a>
                        </li>
                        <li>
                            <a href="#">COVID19 Emergency Course</a>
                        </li>
                        <li>
                            <a href="#">About Algrow Courses</a>
                        </li>
                        <li>
                            <a href="#">Algorw Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Accreditation</a>
                        </li>
                        <li>
                            <a href="#">Premium Learning</a>
                        </li>
                        <li>
                            <a href="#">Refer a Friend</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-h3">MORE</div>
                    <ul>
                        <li>
                            <a href="#">Become a Self Publisher</a>
                        </li>
                        <li>
                            <a href="#">Become a Course Creater</a>
                        </li>
                        <li>
                            <a href="#">Training Webinars</a>
                        </li>
                        <li>
                            <a href="#">Algrow for Business</a>
                        </li>
                        <li>
                            <a href="#">Graduate Outcomes</a>
                        </li>
                        <li>
                            <a href="#">Free Personality Test</a>
                        </li>
                        <li>
                            <a href="#">Media Centre</a>
                        </li>
                        <li>
                            <a href="#">Affiliate Programme</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-h3">CONNECT</div>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Faq} alt="" />FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Facebook} alt="" />Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Twitter} alt="" />Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Linkedin} alt="" />LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Instagram} alt="" />Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Tiktok} alt="" />TikTok
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Youtube} alt="" />Youtube
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Mailbox} alt="" />Customer Support
                            </a>
                        </li>
                    </ul>
                </div>
                {showButton && <span className="up_icon_footer" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i>
                </span>}
            </div>
        </div>
    );
}

export default About;
