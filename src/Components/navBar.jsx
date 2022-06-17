import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Algrow from '../images/Algrow.svg';
import Globe from '../images/globe.svg';
import Dropdown from './common/dropdown';
import SearchBtn from './common/searchBtn';

const NavBar = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const menuRef = useRef();
    const { handleClick, handleInClick } = props;

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!menuRef.current.contains(e.target)) {
                setDropdown(false);
            }
        })
    })

    return (
        <React.Fragment>
            <div className="nav-container">
                <div className="wrapper">
                    <nav className="navigation">
                        <div className="left-nav">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Algrow} alt="algrow" />
                                </Link>
                            </div>
                            <SearchBtn />
                        </div>
                        <ul className="nav-items">
                            <li ref={menuRef}
                                onClick={() => setDropdown(!dropdown)}>
                                <NavLink className="catagories" to="#">
                                    <span >Course Catagories</span>
                                    <span >
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="currentcolor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.23902 0.0121871L7.70689 5.5176L13.2266 0.0731224L15.4189 1.1803L7.69134 8.80256L0.0363196 1.09499L2.23902 0.0121871Z"
                                                fill="currentcolor" fillOpacity="0.8" />
                                        </svg>
                                    </span>
                                </NavLink>
                                {dropdown && <Dropdown />}
                            </li>
                            <li>
                                <NavLink className="types" to="/diplomas">
                                    <span>Diplomas</span>
                                    <span>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="currentcolor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.23902 0.0121871L7.70689 5.5176L13.2266 0.0731224L15.4189 1.1803L7.69134 8.80256L0.0363196 1.09499L2.23902 0.0121871Z"
                                                fill="currentcolor" fillOpacity="0.8" />
                                        </svg>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="guide" to="/careerGuide">Career Guide</NavLink>
                            </li>
                        </ul>
                        <div className="right-nav">
                            <div className="login">
                                <Link to="#" className="sign-up">
                                    <button className="btn-sign" onClick={handleClick}>Sign Up</button>
                                </Link>
                                <Link to="#" className="log-in" onClick={handleInClick}>Log In</Link>
                            </div>
                            <div className="language_wrapper">
                                <div className="language-trigger">
                                    <span className="circle">
                                        <img className="icon-globe" src={Globe} alt="" />
                                    </span>
                                </div>
                                <div className="language-inner">
                                    <span className="mini-circle">
                                        <div className="en">en</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavBar;

