import React from 'react';

function Banner() {
    return (
    <div className="banner">
        <div className="banner-wrap">
            <div className="banner-column-left">
                <h3>Get Personalised Recommendations</h3>
                <p>Answer 5 questions, and we'll recommend the perfect courses and careers for you.</p>
            </div>
            <div className="banner-column-right">
                <span className="badge">
                    <strong>1</strong>/5
                </span>
                <p className="goal">
                    What is <strong>your main goal</strong> at Algrow?
                </p>
                <ul>
                    <li>
                        <a href="#">Upskill in my Career</a>
                    </li>
                    <li>
                        <a href="#">Change my Career Field</a>
                    </li>
                    <li>
                        <a href="#">Explore Hobbies & Interests</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Banner;
