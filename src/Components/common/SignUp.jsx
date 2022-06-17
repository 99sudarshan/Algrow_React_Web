import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const initialValues = { firstName: '', surname: '', email: '', checkbox: false };
    const [formValues, setFormValues] = useState(initialValues);
    const { showAlert, setIsSubmit, formErrors, setFormErrors, clickedLogIn } = props;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(e.target);
        setFormValues({ ...formValues, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        showAlert("Signed in Successfully");
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^([_\-\.a-zA-z]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/i;
        if (!values.firstName) {
            errors.firstName = "Username is required!";
            document.getElementById("firstName").classList.add('is-invalid');
        }
        else {
            document.getElementById("firstName").classList.remove('is-invalid');
        }

        if (!values.surname) {
            errors.surname = "Surname is required!";
            document.getElementById("surname").classList.add('is-invalid');
        }
        else {
            document.getElementById("surname").classList.remove('is-invalid');
        }

        if (!values.email) {
            errors.email = "Email is required!";
            document.getElementById("email").classList.add('is-invalid');
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email!";
            document.getElementById("email").classList.add('is-invalid');
        }
        else {
            document.getElementById("email").classList.remove('is-invalid');
        }

        if (!values.password) {
            errors.password = "Password is required!";
            document.getElementById("password").classList.add('is-invalid');
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
            document.getElementById("password").classList.add('is-invalid');
        }
        else if (values.password.length > 10) {
            errors.password = "Password must be less than 10 characters";
            document.getElementById("password").classList.add('is-invalid');
        }
        else {
            document.getElementById("password").classList.remove('is-invalid');
        }
        if (!values.checkbox) {
            errors.checkbox = "";
            document.querySelector('.form-check-label').classList.add('bg-warning');
            setTimeout(() => {
                document.querySelector('.form-check-label').classList.remove('bg-warning');
            }, 3000);
        }
        return errors;
    };


    return (
        <React.Fragment>
            <form action="" className="form sign-up-form" onSubmit={handleSubmit}>
                <h3 className='title'>Sign Up For Free!</h3>
                <div className="row">
                    <div className="col">
                        <input type="text" name="firstName" id="firstName"
                            className="form-control" placeholder="First Name"
                            value={formValues.firstName}
                            onChange={handleChange} />
                        <small className='invalid-feedback'>{formErrors.firstName}</small>
                    </div>
                    <div className="col">
                        <input type="text" name="surname" id="surname" className="form-control" placeholder="Surname"
                            value={formValues.surname}
                            onChange={handleChange} />
                        <small className='invalid-feedback'>{formErrors.surname}</small>
                    </div>
                </div>
                <div className="input-field">
                    <input type="text" className="form-control" placeholder='E-mail' id="email" name="email"
                        value={formValues.email}
                        onChange={handleChange} />
                    <small className='invalid-feedback'>{formErrors.email}</small>
                </div>
                <div className="input-field">
                    <input type="password" className="form-control" placeholder='Password' id="password" name="password"
                        value={formValues.password}
                        onChange={handleChange} />
                    <small className='invalid-feedback'>{formErrors.password}</small>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox" name="checkbox"
                            value={formValues.checkbox}
                            onChange={handleChange} />

                        <label className="form-check-label" htmlFor="gridCheck">I agree to the
                            <Link to="/">Terms & Conditions</Link>
                        </label>
                        <small>{formErrors.checkbox}</small>

                    </div>
                </div>
                <input type="submit" value="Sign Up" className="btn-form" />
                <p className="social-text">Or Sign Up with social platform</p>
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
                <p className="have_account">Already have an Algrow account?
                    <Link to="#" onClick={clickedLogIn}>Log in
                    </Link>
                </p>
            </form>
        </React.Fragment>
    )
}

export default SignUp;