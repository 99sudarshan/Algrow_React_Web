import React from 'react';
import { Link } from 'react-router-dom';
import IT from '../../images/IT.svg';
import Language from '../../images/Language.svg';
import Sales from '../../images/sales-icon.svg';
import Mgnt from '../../images/mgnt-icon.svg';
import Health from '../../images/health-icon.svg';
import Business from '../../images/business-icon.svg';
import Engineering from '../../images/engineer-icon.svg';
import Devlopment from '../../images/personBag_icon.svg';
import Teaching from '../../images/book-icon.svg';
import About from '../common/about';
import PrivacyPolicy from '../common/privacyPolicy';
import AboveText from '../common/aboveText';
import SearchBtnAllCourses from '../common/searchBtnAllCourses';

function Categories() {
    return (
        <React.Fragment>
            <div className="allcourses">
                <div className="py-3 mx-4">
                    <AboveText />
                    <SearchBtnAllCourses />
                    <div className="flex-grid-item">
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/it">
                                    <span className="rounded-icon-it for-img ">
                                        <img src={IT} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/it">
                                        IT
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/it/python">Python</Link> </li>
                                <li><Link to="/courses/it/dataScience">DataScience</Link></li>
                                <li><Link to="/courses/it/react">React</Link></li>
                                <li><Link to="/courses/it/html-css">HTML & CSS</Link></li>
                                <li><Link to="/courses/it/javascript">JavaScript</Link></li>
                                <li><Link to="/courses/it/node-js">Node Js</Link></li>
                                <li><Link to="/courses/it/django">Django</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/language">
                                    <span className="rounded-icon-language for-img">
                                        <img src={Language} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/language">
                                        Language
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/language/business-english">Business English</Link></li>
                                <li><Link to="/courses/language/chinese-language">Chinese Language</Link></li>
                                <li><Link to="/courses/language/german-language">German Language</Link></li>
                                <li><Link to="/courses/language/swedish-language">Swedish Language</Link></li>
                                <li><Link to="/courses/language/english-language">English Pronounciation</Link></li>
                                <li><Link to="/courses/language/english-writing">English Writing</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/salesMarketing">
                                    <span className="rounded-icon-salesmkt for-img">
                                        <img src={Sales} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/salesMarketing">
                                        Sales & Marketing
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/salesMarkeiting/advertising">Advertising</Link></li>
                                <li><Link to="/courses/salesMarkeiting/content-marketing">Content Marketing</Link></li>
                                <li><Link to="/courses/salesMarkeiting/digital-marketing">Digital Marketing</Link></li>
                                <li><Link to="/courses/salesMarkeiting/entrepreneurship">Entrepreneurship</Link></li>
                                <li><Link to="/courses/salesMarkeiting/affiliate-marketing">Affiliate Marketing</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/management">
                                    <span className="rounded-icon-mgt for-img">
                                        <img src={Mgnt} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/management">
                                        Management
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/management/accounting">Accounting</Link></li>
                                <li><Link to="/courses/management/auditing">Auditing</Link></li>
                                <li><Link to="/courses/management/health-safety">Health & Safety</Link></li>
                                <li><Link to="/courses/management/human-resources">Human Resources</Link></li>
                                <li><Link to="/courses/management/economics">Economics</Link></li>
                                <li><Link to="/courses/management/banking">Banking</Link></li>
                                <li><Link to="/courses/management/manufacturing">Manufacturing</Link></li>
                                <li><Link to="/courses/management/hospitality">Hospitality Management</Link></li>

                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/health">
                                    <span className="rounded-icon-health for-img">
                                        <img src={Health} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/health">
                                        Health
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/health/nursing">Nursing</Link></li>
                                <li><Link to="/courses/health/nutritions">Nutritions</Link></li>
                                <li><Link to="/courses/health/physical-therapy">Physical Therapy</Link></li>
                                <li><Link to="/courses/health/mental-health">Mental Health</Link></li>
                                <li><Link to="/courses/health/trauma">Trauma</Link></li>
                                <li><Link to="/courses/health/pharmacology">Pharmacology</Link></li>
                                <li><Link to="/courses/health/hygiene">Hygiene</Link></li>
                                <li><Link to="/courses/health/health-care">Health Care</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/course/business">
                                    <span className="rounded-icon-business for-img">
                                        <img src={Business} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/business">
                                        Business
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/business/accounting">Accounting</Link></li>
                                <li><Link to="/courses/business/auditing">Auditing</Link></li>
                                <li><Link to="/courses/business/e-commerce">E-commerce</Link></li>
                                <li><Link to="/courses/business/health-safety">Health & Safety</Link></li>
                                <li><Link to="/courses/business/management">Management</Link></li>
                                <li><Link to="/courses/business/manufacturing">Manufacturing</Link></li>
                                <li><Link to="/courses/business/sales">Sales</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/engineering">
                                    <span className="rounded-icon-eng for-img">
                                        <img src={Engineering} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/engineering">
                                        Engineering & Contruction
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/engineeering/auditing">Auditing</Link></li>
                                <li><Link to="/courses/engineeering/contruction">Contruction</Link></li>
                                <li><Link to="/courses/engineeering/quality-management">Quality Management</Link></li>
                                <li><Link to="/courses/engineeering/electrical-engineer">Electrical Engineering</Link></li>
                                <li><Link to="/courses/engineeering/medical-engineer">Mechanical Engineering</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/personalDevelop">
                                    <span className="rounded-icon-develop for-img">
                                        <img src={Devlopment} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/personalDevelop">
                                        Personal Development
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/personalDevelop/anxiety">Anxiety</Link></li>
                                <li><Link to="/courses/personalDevelop/communication">Communication Skills</Link></li>
                                <li><Link to="/courses/personalDevelop/diet">Diet</Link></li>
                                <li><Link to="/courses/personalDevelop/health">Health</Link></li>
                                <li><Link to="/courses/personalDevelop/motivation">Motivation</Link></li>
                                <li><Link to="/courses/personalDevelop/music">Music</Link></li>
                                <li><Link to="/courses/personalDevelop/fitness">Fitness</Link></li>
                            </ul>
                        </div>
                        <div className="grid-item">
                            <div className="two-item">
                                <Link to="/courses/teaching">
                                    <span className="rounded-icon-teaching for-img">
                                        <img src={Teaching} alt="" />
                                    </span>
                                </Link>
                                <span className="text-holder">
                                    <Link to="/courses/teaching">
                                        Teaching & Academics
                                    </Link>
                                </span>
                            </div>
                            <ul>
                                <li><Link to="/courses/teaching/economics">Economics</Link></li>
                                <li><Link to="/courses/teaching/history">History</Link></li>
                                <li><Link to="/courses/teaching/geography">Geography</Link></li>
                                <li><Link to="/courses/teaching/mathematics">Mathematics</Link></li>
                                <li><Link to="/courses/teaching/science">Science</Link></li>
                                <li><Link to="/courses/teaching/journalism">Journalism</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='main'>
                <About />
                <PrivacyPolicy />
            </footer>
        </React.Fragment>
    );
}

export default Categories;
