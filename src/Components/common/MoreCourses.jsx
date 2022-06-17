import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GetTrending, GetPopular, GetRecent } from '../../ArrayFlies/OnlineCourses';
import CourseItem from './courseItem';

const Courses = () => {
    const trendingCourse = GetTrending();
    const papularCourse = GetPopular();
    const recentCourse = GetRecent();

    const [isTrending, setIsTrending] = useState(true);
    const [isPopular, setIsPopular] = useState(false);
    const [isRecent, setIsRecent] = useState(false);

    const handleTrending = () => {
        setIsTrending(true);
        setIsPopular(false);
        setIsRecent(false);
    };

    const handlePopular = () => {
        setIsPopular(true);
        setIsTrending(false);
        setIsRecent(false);
    };

    const handleRecent = () => {
        setIsRecent(true);
        setIsTrending(false);
        setIsPopular(false);
    };

    return (
        <React.Fragment>
            <div className="moreCourses">
                <div className="button-container">
                    <div className="button-container-inner">
                        <Link to="#" title="trending"
                            className={`${isTrending ? "trending-active" : "trending"}`}
                            onClick={handleTrending}>
                            <span>Trending</span>
                        </Link>
                        <Link to="#" title="popular"
                            className={`${isPopular ? "popular-active" : "popular"}`}
                            onClick={handlePopular}>
                            <span>Most Popular</span>
                        </Link>
                        <Link to="#" title="recent"
                            className={`${isRecent ? "recent-active" : "recent"}`}
                            onClick={handleRecent} >
                            <span>Most Recent</span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {isTrending && trendingCourse.map((course) => {
                        return <div className="col-md-4" key={course.id}>
                            <CourseItem title={course.title} urlImage={course.urlToImage} courseType={course.courseType} courseCategory={course.courseCategory} />
                        </div>
                    })}
                    {isPopular && papularCourse.map((course) => {
                        return <div className="col-md-4" key={course.id}>
                            <CourseItem title={course.title} urlImage={course.urlToImage} courseType={course.courseType} courseCategory={course.courseCategory} />
                        </div>
                    })}
                    {isRecent && recentCourse.map((course) => {
                        return <div className="col-md-4" key={course.id}>
                            <CourseItem title={course.title} urlImage={course.urlToImage} courseType={course.courseType} courseCategory={course.courseCategory} />
                        </div>
                    })}
                </div>
                <div className="course-list">
                    <div className="more-courses-btn">
                        <Link to="/courses/categories" className="large-btn">More Courses</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Courses;
