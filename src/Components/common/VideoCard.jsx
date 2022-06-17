import React, { useState, useRef, useEffect } from 'react';

const VideoCard = (props) => {
    const { urlToImg, title, desc, courseType, courseCategory, src } = props;
    const [isPlay, setIsPlay] = useState(false);
    const videoRef = React.useRef();

    const handleClick = () => {
        setIsPlay(true);
    };

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (!videoRef.current.contains(e.target)) {
                setIsPlay(false);
            }
        })
    })

    return (
        <React.Fragment>
            <div className="card videoCard">
                <img src={urlToImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className='courseType'>{courseType}</span>
                    <span className={`${courseCategory === "Business" ? "courseCategoryB" : courseCategory === "Management" ? "courseCategoryM" : courseCategory === "Health" ? "courseCategoryH" : courseCategory === "Personal Development" ? "courseCategoryP" : courseCategory === "IT" ? "courseCategoryI" : courseCategory === "Language" ? "courseCategoryL" : courseCategory === "Teaching & Academics" ? "courseCategoryT" : "courseCategoryE"}`}>{courseCategory}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="itVideo-btn">
                        <button className="btn btn-primary" onClick={handleClick}>Start Watching</button>
                    </div>
                </div>
            </div>
            {isPlay && <div className='video-modal-wrapper' >
                <div className='video-modal-backdrop'></div>
                <iframe ref={videoRef} id="video" width="800" height="415" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;" allowFullScreen></iframe>
            </div>
            }
        </React.Fragment>
    )
}

export default VideoCard;
