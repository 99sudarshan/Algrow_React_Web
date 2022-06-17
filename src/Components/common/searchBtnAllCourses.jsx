import React from 'react';
import SearchI from '../../images/search-icon.svg';

function SearchBtnAllCourses() {
    return (
        <div>
            <form className="search-btn-all d-flex mb-5">
                <input type="text" placeholder="Search Categories" aria-label="Search" />
                <button className="btn" type="submit">
                    <span className="icon-search">
                        <img src={SearchI} alt="search" />Search
                    </span>
                </button>
            </form>
        </div>
    )
}

export default SearchBtnAllCourses;