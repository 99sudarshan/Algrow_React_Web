import React from 'react';
import Graduates from '../../images/graduate_icon.svg';
import Course from '../../images/courses_icon.svg';
import globe from '../../images/globe_2.svg';
import Peoples from '../../images/people_icon.svg';

function Stats() {
    return (
    <div className="algrow-stats">
        <div className="algrow-stats-inner">
            <div className="stats-learner">
                <span className="stats-icon">
                    <img src={Peoples} alt=""/>
                </span>
                <div className="stats-amount">21</div>
                <div className="stats-title">Million Learners</div>
            </div>
            <div className="stats-graduates">
                <span className="stats-icon">
                    <img src={Graduates} alt=""/>
                </span>
                <div className="stats-amount">4</div>
                <div className="stats-title">Million Graduates</div>
            </div>
            <div className="stats-courses">
                <span className="stats-icon">
                    <img src={Course} alt=""/>
                </span>
                <div className="stats-amount">3,500+</div>
                <div className="stats-title">Courses</div>
            </div>
            <div className="stats-countries">
                <span className="stats-icon">
                    <img src={globe} alt=""/>
                </span>
                <div className="stats-amount">195</div>
                <div className="stats-title">Countries</div>
            </div>
        </div>
    </div>
  );
}

export default Stats;
