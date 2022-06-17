import React from 'react'
import { Link } from 'react-router-dom';

const CourseItem = (props) => {
    const { title, urlImage, courseType, courseCategory } = props;

    return (
        <div className="card courseItem" style={{ width: "18rem", height: "" }}>
            <img src={urlImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className='courseType'>{courseType}</span>
                <span
                    className={`${courseCategory === "Business" ? "courseCategoryB" : courseCategory === "Management" ? "courseCategoryM" : courseCategory === "Health" ? "courseCategoryH" : courseCategory === "Personal Development" ? "courseCategoryP" : courseCategory === "IT" ? "courseCategoryI" : courseCategory === "Language" ? "courseCategoryL" : "courseCategoryT"}`}>{courseCategory}</span>
                <h6 className="card-title">{title}</h6>
                <div className="courseItem-btn">
                    <Link to=
                        {`${courseCategory === "Business" ? "/business" : courseCategory === "Management" ? "/management" : courseCategory === "Health" ? "/health" : courseCategory === "Language" ? "/language" : courseCategory === "Personal Development" ? "/personalDevelop" : courseCategory === "IT" ? "/it" : "/teaching"}`} className="btn btn-primary">Start Now</Link>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;