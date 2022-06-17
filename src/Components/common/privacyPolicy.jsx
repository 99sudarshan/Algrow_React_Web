import React from 'react';
import algrow from '../../images/Algrow-2.svg';

function PrivacyPolicy() {
    return (
    <div className="last-box">
        <div className="last-main-box">
            <img src={algrow} alt="" className="logo-big"/>
            <ul>
                <li className="icon-right">
                    <span>
                        <img src="/images/C-icon.svg" className="c-image" alt=""/>Algrow 2022
                    </span>
                </li>
                <li className="icon-right">
                    <a href="#">Privacy</a>
                </li>
                <li className="icon-right">
                    <a href="#">Terms</a>
                </li>
                <li className="icon-right">
                    <a href="#">Cookie Policy</a>
                </li>
                <li className="icon-no-border">
                    <a href="#">Sitemap</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default PrivacyPolicy;
