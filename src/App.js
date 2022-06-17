import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import NavBar from './Components/navBar';
import Categories from './Components/pages/Categories';
import CareerGuide from './Components/pages/careerGuide';
import Diplomas from './Components/pages/diplomas';
import HomePage from './Components/homePage';
import It from './Components/pages/it';
import Language from './Components/pages/language';
import SalesMarketing from './Components/pages/salesMarketing';
import Management from './Components/pages/management';
import Health from './Components/pages/health';
import Business from './Components/pages/business';
import Engineering from './Components/pages/engineering';
import PersonalDevelop from './Components/pages/personalDevelop';
import Teaching from './Components/pages/teaching';
import LoginForm from './Components/common/LoginForm'
// import Courses from './Components/Courses';
import SubVideos from './Components/pages/SubVideos';

function App() {
  const [isForm, setIsForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false)

  const handleClick = () => {
    setIsForm(true)
    setIsLoginForm(false)
  };
  const handleInClick = () => {
    setIsForm(true)
    setIsLoginForm(true)
  };

  return (
    <React.Fragment>
      <NavBar
        handleClick={handleClick}
        handleInClick={handleInClick} />
      {isForm && <div className="loginForm-wrapper">
        <div className="loginForm-backdrop"></div>
        <LoginForm
          setIsForm={setIsForm}
          className={`form-container ${isLoginForm && 'sign-in-mode'} `} />
      </div>}
      <Switch>
        <Route path="/courses/categories" component={Categories} />
        {/* <Route path="/courses/:name" render={props => <Courses {...props} />} /> */}
        <Route path="/courses/:id/:name" render={props => <SubVideos {...props} />} />
        <Route path="/courses/it" component={It} />
        <Route path="/courses/language" component={Language} />
        <Route path="/courses/salesMarketing" component={SalesMarketing} />
        <Route path="/courses/management" component={Management} />
        <Route path="/courses/health" component={Health} />
        <Route path="/courses/business" component={Business} />
        <Route path="/courses/engineering" component={Engineering} />
        <Route path="/courses/personalDevelop" component={PersonalDevelop} />
        <Route path="/courses/teaching" component={Teaching} />
        <Route path="/careerGuide" component={CareerGuide} />
        <Route path="/diplomas" component={Diplomas} />
        <Route path="/">
          <HomePage handleClick={handleClick} />
        </Route>
        <Redirect from="/" exact to="homePage" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
