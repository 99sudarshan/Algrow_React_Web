import React from 'react';
import MoreCourses from './common/MoreCourses'
import Section from './common/section';
import Banner from './common/banner';
import Stats from './common/stats';
import Testimonials from './common/testimonials';
import About from './common/about';
import PrivacyPolicy from './common/privacyPolicy';

const HomePage = (props) => {
    const { handleClick } = props;

    return (
        <React.Fragment>
            <div className='header'>
                <Section clickHandler={handleClick} />
                <Banner />
                <MoreCourses />
                <Stats />
                <Testimonials />
            </div>
            <footer className='main'>
                <About />
                <PrivacyPolicy />
            </footer>
        </React.Fragment>
    );
}

export default HomePage;
