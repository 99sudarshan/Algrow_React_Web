import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import It from '../../images/IT.svg';
import Language from '../../images/Language.svg';
import Sales from '../../images/sales-icon.svg';
import Mgnt from '../../images/mgnt-icon.svg';
import Health from '../../images/health-icon.svg';
import Business from '../../images/business-icon.svg';
import Engineering from '../../images/engineer-icon.svg';
import Devlopment from '../../images/personBag_icon.svg';
import Teaching from '../../images/book-icon.svg';
import AllCategories from '../../images/All_categories.svg';

function Dropdown(props) {
    // const [dropdown, setDropdown] = useState(false);

    return (
        <div className="submenu">
            <ul className="categories-submenu">
                <li>
                    <Link to="/courses/it">
                        <span className="img-holder">
                            <img src={It} alt="" />
                        </span>
                        <p>IT</p>
                    </Link>
                </li>
                <li>
                    <Link to="/courses/language">
                        <span className="img-holder">
                            <img src={Language} alt="" />
                        </span>
                        <p>Language</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/salesMarketing">
                        <span className="img-holder">
                            <img src={Sales} alt="" />
                        </span>
                        <p>Sales & Marketing</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/management">
                        <span className="img-holder">
                            <img src={Mgnt} alt="" />
                        </span>
                        <p>Management</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/health">
                        <span className="img-holder">
                            <img src={Health} alt="" />
                        </span>
                        <p>Health</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/business">
                        <span className="img-holder">
                            <img src={Business} alt="" />
                        </span>
                        <p>Business</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/engineering">
                        <span className="img-holder">
                            <img src={Engineering} alt="" />
                        </span>
                        <p>Engineering & Construction</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/personalDevelop">
                        <span className="img-holder">
                            <img src={Devlopment} alt="" />
                        </span>
                        <p>Personal Development</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/teaching">
                        <span className="img-holder">
                            <img src={Teaching} alt="" />
                        </span>
                        <p>Teaching & Academics</p>
                    </Link>
                </li>
                <li >
                    <Link to="/courses/categories">
                        <span className="img-holder1">
                            <img src={AllCategories} alt="" />
                        </span>
                        <p>All Categories</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Dropdown;
