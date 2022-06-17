import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import FormPanels from './FormPanels';

const LoginForm = (props) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [alert, setAlert] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const { setIsForm } = props;

    const showAlert = (message) => {
        setAlert({
            msg: message
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    };

    const logInClicked = () => {
        document.querySelector('.form-container').classList.add('sign-in-mode');
    }

    return (
        <div className="form-body">
            {alert && Object.keys(formErrors).length === 0 && isSubmit && <div className="alert alert-success text-center" role="alert" style={{ position: 'absolute', top: '4rem', left: '38rem', zIndex: '4' }} >{alert.msg}</div>}
            <div className={props.className}>
                <i className="fa-solid fa-xmark" onClick={() => setIsForm(false)}></i>
                <div className="signin-signup">
                    <SignUp
                        setIsSubmit={setIsSubmit}
                        showAlert={showAlert}
                        formErrors={formErrors}
                        setFormErrors={setFormErrors}
                        clickedLogIn={logInClicked}
                    />
                    <Login
                        showAlert={showAlert}
                        formErrors={formErrors}
                        setFormErrors={setFormErrors}
                    />
                </div>
                <FormPanels />
            </div>
        </div>
    )
}

export default LoginForm;