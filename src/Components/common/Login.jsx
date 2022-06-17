import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const { showAlert, formErrors, setFormErrors } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        showAlert("Logged in successfully")
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^([_\-\.a-zA-z]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/i;
        if (!values.email) {
            errors.email = "Enter your email!";
            document.getElementById('e-mail').classList.add('is-invalid');
        }
        else if (!regex.test(values.email)) {
            errors.email = " You have entered wrong email address!";
            document.getElementById('e-mail').classList.add('is-invalid');
        }
        else {
            document.getElementById('e-mail').classList.remove('is-invalid');

        }

        if (!values.password) {
            errors.password = "Enter your password!";
            document.getElementById('pass-word').classList.add('is-invalid');
        }
        // else if (typeof values.password !== "undefined") {
        //     errors.password = " You have entered wrong Password!"
        //     document.getElementById('password').classList.add('is-invalid');
        // }
        else if (values.password.length < 4) {
            errors.password = " You have entered wrong Password!";
            document.getElementById('pass-word').classList.add('is-invalid');
        }
        else if (values.password.length > 10) {
            errors.password = " You have entered wrong Password!";
            document.getElementById('pass-word').classList.add('is-invalid');
        }
        else {
            document.getElementById('pass-word').classList.remove('is-invalid')
        }
        return errors;
    };

    return (
        <React.Fragment>
            <form action="" className=" form sign-in-form"
                onSubmit={handleSubmit}>
                <h3 className='title'> Welcome Back! </h3>
                <div className="input-field">
                    <input type="text" className="form-control" placeholder='E-mail' id="e-mail" name="email"
                        value={formValues.email}
                        onChange={handleChange} />
                    <small className="invalid-feedback">{formErrors.email}</small>
                </div>
                <div className="input-field">
                    <input type="password" className="form-control" placeholder='Password' id="pass-word" name="password"
                        value={formValues.password}
                        onChange={handleChange} />
                    <small className="invalid-feedback">{formErrors.password}</small>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check-box" name="checkbox" />
                        <label className="form-check-label" htmlFor="gridCheck">keep me logged in
                        </label>
                        <Link to="/" className='forgot-password'>Forgot password?</Link>
                    </div>
                </div>
                <input type="submit" value="Login" className="btn-form" />
                <p className="social-text">Or Sign In with social platform</p>
                <div className="social-media">
                    <a href="https://www.facebook.com" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://accounts.google.com" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="https://linkedin.com" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login;