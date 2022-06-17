import React, { useState, useRef } from 'react';
import { ForIt } from '../../ArrayFlies/AboutTxtImg';
import VideoCard from '../common/VideoCard';
import { ItVideo } from '../../ArrayFlies/VideosList';
import About from '../common/about';
import PrivacyPolicy from '../common/privacyPolicy';

const It = () => {
    // console.warn(props);

    const [isMore, setIsMore] = useState(false);
    const videoListRef = useRef();

    const forIt = ForIt();
    const ItVideos = ItVideo();

    const toggleBtn = () => {
        setIsMore(!isMore)
    };

    const handleStarted = () => {
        videoListRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <React.Fragment>
            <div className="categories_page">
                <div className="categories_page_section">
                    {forIt.map((element, index) => {
                        return <div className=" card card_categories_page" key={index}>
                            <div className={`${isMore ? "card-body" : "card-body-small"}`}>
                                <h4 className="my-4">
                                    {element.heading}
                                    <span className='social-icons'>
                                        <a href="https://www.facebook.com" className="facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="https://twitter.com" className="twitter">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="https://linkedin.com" className="linkedin">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </span>
                                </h4>
                                {isMore ?
                                    [<p className="mb-4" key={index}>{element.para}</p>,
                                    <p key={index + 1}>{element.para1}</p>,
                                    <p key={index + 2}>{element.para2}</p>
                                    ]
                                    : [
                                        <p className="mb-4" key={index}>{element.para.slice(0, 293)}..
                                            <span><a href="#" onClick={toggleBtn}>Read More...</a></span></p>
                                    ]
                                }
                                <button className="btn btn-primary" onClick={handleStarted}>Get Started</button>
                            </div>
                            <img src={element.img} className={`${isMore ? "card-img-left" : "card-img-small"}`} alt="..." />
                        </div>
                    })}
                </div>
                <div className="video-container">
                    <h4>{`Top ${ItVideos.length} Online IT Courses `}</h4>
                    <div className="row" ref={videoListRef}>
                        {ItVideos.map((element) => {
                            return <div className="col-md-4" key={element.id}>
                                <VideoCard title={element.title} urlToImg={element.urlToImg} desc={element.desc} courseType={element.courseType} courseCategory={element.courseCategory} src={element.url} link={`/it/${element.id}`} />
                            </div>
                        })}
                    </div>

                </div>
                <footer className='main'>
                    <About />
                    <PrivacyPolicy />
                </footer>
            </div>
        </React.Fragment>
    );
}

export default It;