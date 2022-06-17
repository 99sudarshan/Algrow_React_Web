import React from 'react';
import signup from '../../images/signup.svg';
import signin from '../../images/signin.svg';

const FormPanels = () => {
    const handleUpClick = () => {
        document.querySelector('.form-container').classList.remove('sign-in-mode');
    };

    const handleInClick = () => {
        document.querySelector('.form-container').classList.add('sign-in-mode');
    };

    return (
        <React.Fragment>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Member of Us</h3>
                        <p>What will you learn today? Find out, with Algrow.</p>
                        <button className="btn-form" onClick={handleUpClick}> Sign Up</button>
                    </div>
                    <img src={signup} alt="" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>New to Start</h3>
                        <p>Join the World’s Largest Free Learning Community</p>
                        <button className="btn-form" onClick={handleInClick}>Sign In</button>
                    </div>
                    <img src={signin} alt="" className="image" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormPanels;