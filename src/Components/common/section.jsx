import React from 'react';
import { Link } from 'react-router-dom';
import IT from '../../images/IT.svg';
import Language from '../../images/Language.svg';
import Sales from '../../images/sales-icon.svg';
import Mgnt from '../../images/mgnt-icon.svg';
import Health from '../../images/health-icon.svg';
import Business from '../../images/business-icon.svg';
import Engineering from '../../images/engineer-icon.svg';
import Devlopment from '../../images/personBag_icon.svg';
import Teaching from '../../images/book-icon.svg';

const Section = (props) => {
    const { clickHandler } = props;

    return (
        <section className="header-container">
            <div className="two-column-wrapper">
                <div className="left-column col-md-6">
                    <h2>Empower Yourself</h2>
                    <h4>
                        Thousands of
                        <span>
                            <Link to="/courses/categories">Free online courses</Link>
                        </span>
                        <span>
                            with
                            <Link to="/courses/categories">Certificates</Link>
                            and
                            <Link to="/diplomas">Diplomas</Link>
                        </span>
                    </h4>
                    <p>
                        <span>
                            Get
                            <Link to="/careerGuide">
                                Career Guidance
                            </Link>
                            and Boost Your Resume.
                        </span>
                    </p>
                    <p>
                        <span>
                            No enrollment or subscription fees.
                        </span>
                    </p>
                    <p className="last-line">Get Skilled.Get Certified.Get Hired.</p>
                    <h3>
                        <Link to="#" className="btn-sign-up" onClick={clickHandler}>
                            Sign up now
                        </Link>
                    </h3>
                </div>
                <div className="right-column col-md-6 text-center">
                    <div className="row">
                        <Link to="/courses/it" className="card">
                            <span className="it">
                                <img src={IT} alt="" />
                            </span>
                            <p to="/courses/it">IT</p>
                        </Link>
                        <Link to="/courses/language" className="card">
                            <span className="language">
                                <img src={Language} alt="" />
                            </span>
                            <p>Language</p>
                        </Link>
                        <Link to="/courses/salesMarketing" className="card">
                            <span className="sales">
                                <img src={Sales} alt="" />
                            </span>
                            <p>Sales & Marketing</p>
                        </Link>
                        <Link to="/courses/management" className="card">
                            <span className="management">
                                <img src={Mgnt} alt="" />
                            </span>
                            <p>Management</p>
                        </Link>
                        <Link to="/courses/health" className="card">
                            <span className="health">
                                <img src={Health} alt="" />
                            </span>
                            <p>Health</p>
                        </Link>
                        <Link to="/courses/business" className="card">
                            <span className="business">
                                <img src={Business} alt="" />
                            </span>
                            <p>Business</p>
                        </Link>
                        <Link to="/courses/engineering" className="card">
                            <span className="engineering">
                                <img src={Engineering} alt="" />
                            </span>
                            <p>Engineering & Construction</p>
                        </Link>
                        <Link to="/courses/personalDevelop" className="card">
                            <span className="personal">
                                <img src={Devlopment} alt="" />
                            </span>
                            <p>Personal Development</p>
                        </Link>
                        <Link to="/courses/teaching" className="card">
                            <span className="academics">
                                <img src={Teaching} alt="" />
                            </span>
                            <p>Teaching & Academics</p>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Section;
