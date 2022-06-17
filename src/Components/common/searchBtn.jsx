import React from 'react';
import SearchI from '../../images/search-icon.svg';

function SearchBtn() {
    return (
        <form className="d-flex">
            <input maxLength="200" type="text" placeholder="Search for courses" aria-label="Search" />
            <button className="btn" type="submit">
                <span className="icon-search">
                    <img src={SearchI} alt="search" />
                </span>
            </button>
        </form>
    )
}

export default SearchBtn;