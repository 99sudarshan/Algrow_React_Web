import React from 'react';
import { Link } from 'react-router-dom';
import careerGuideImg from '../../images/careerGuide.png';
import CareerCard from '../common/CareerCard';
import { ForCareer } from '../../ArrayFlies/OnlineCourses';
import About from './../common/about';
import PrivacyPolicy from './../common/privacyPolicy';
import SearchI from '../../images/search-icon.svg';


function CareerGuide() {
  const Career = ForCareer();

  return (
    <React.Fragment>
      <div className="career_guide">
        <div className="career_banner">
          <img className='img_banner' src={careerGuideImg} alt="" />
          <div className="about_text">
            <h1>Career Guide</h1>
            <p>Algrow’s career guide will help you discover more about your career path and identify the exact courses you need to excel in your career.</p>
          </div>
        </div>
        <div className="career_search_wrapper">
          <p>Get started by <strong>selecting your preferred career category</strong>,or</p>
          <form className="search_btn_careerGuide">
            <input type="text" placeholder="Search for careers" aria-label="Search" />
            <button className="btn" type="submit">
              <span className="icon-search">
                <img src={SearchI} alt="search" />
              </span>
            </button>
          </form>
        </div>
        <div className="career_container">
          <div className="row">
            {Career.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <Link className="careerCard_link" to={element.courseCategory === "Business" ? "/business" : element.courseCategory === "Management" ? "/management" : element.courseCategory === "Health" ? "/health" : element.courseCategory === "IT" ? "/it" : element.courseCategory === "Personal Development" ? "/personalDevelop" : element.courseCategory === "Sales & Marketing" ? "/salesMarketing" : element.courseCategory === "Teaching & Academics" ? "/teaching" : "/engineering"}>
                  <CareerCard urlToImg={element.urlToImage} title={element.title} />
                </Link>
              </div>
            })}
          </div>
        </div>
        <footer className="main">
          <About />
          <PrivacyPolicy />
        </footer>
      </div>
    </React.Fragment>
  );
}

export default CareerGuide;
