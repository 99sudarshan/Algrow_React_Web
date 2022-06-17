/*

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUpForm() {
    const initialValues = { firstName: "", surname: "", email: "", password: "", checkbox: false };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [alert, setAlert] = useState({});

    const showAlert = (message) => {
        setAlert({
            msg: message
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(e.target);
        setFormValues({ ...formValues, [name]: type === "checkbox" ? checked : value });
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0) {
            console.log(formValues);
        }
    }, [formErrors])

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
            document.getElementById("checkbox").classList.add('is-invalid');
            setTimeout(() => {
                document.getElementById("checkbox").classList.remove('is-invalid');
            }, 4000);
        }
        return errors;
    };

    return (
        <React.Fragment>
            <div className="container form-sign">
                {alert && Object.keys(formErrors).length === 0 && isSubmit && <div className="alert alert-success text-center" role="alert" style={{ margin: '5px auto', width: '20%' }} >{alert.msg}</div>}
                <div className="form-text">
                    <h1>Sign Up For Free</h1>
                    <p>Join the World’s Largest Free Learning Community</p>
                </div>
                <form className='form-background'
                    onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" name="firstName" id="firstName"
                                className="form-control" placeholder="First Name"
                                value={formValues.firstName}
                                onChange={handleChange} />
                            <small className='invalid-feedback' >{formErrors.firstName}</small>
                        </div>
                        <div className="col ">
                            <input type="text" name="surname" id="surname" className="form-control" placeholder="Surname"
                                value={formValues.surname}
                                onChange={handleChange} />
                            <small className='invalid-feedback'>{formErrors.surname}</small>
                        </div>
                    </div>
                    <div className="mb-3 box">
                        <input type="text" className="form-control" placeholder='E-mail' id="email" name="email"
                            value={formValues.email}
                            onChange={handleChange} />
                        <small className='invalid-feedback'>{formErrors.email}</small>
                    </div>
                    <div className="mb-4 box">
                        <input type="password" className="form-control" placeholder='Password' id="password" name="password"
                            value={formValues.password}
                            onChange={handleChange} />
                        <small className='invalid-feedback'>{formErrors.password}</small>
                    </div>
                    <div className="mb-4 form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox" name="checkbox"
                            value={formValues.checkbox}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the
                            <Link to="/">Terms & Conditions</Link>
                        </label>
                        <small className='invalid-feedback'>{formErrors.checkbox}</small>
                    </div>
                    <div className="btn-contained">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default SignUpForm;

*/


// -----------------------------------Login.jsx----------------------------------------------

/*

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const initialValues = { email: "", password: "", checkbox: false };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [alert, setAlert] = useState(null);

    const showAlert = (message) => {
        setAlert({
            msg: message
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(e.target);
        setFormValues({ ...formValues, [name]: type === "checkbox" ? checked : value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsValid(true)
        showAlert("logged in Successfully")
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^([_\-\.a-zA-z]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/i;
        if (!values.email) {
            errors.email = "Please enter your email!";
            document.getElementById('email').classList.add('is-invalid');
            setIsValid(false);
        }
        else if (!regex.test(values.email)) {
            errors.email = " You have entered wrong email address!";
            document.getElementById('email').classList.add('is-invalid');
            setIsValid(false);
        }
        else {
            setIsValid(true);
            document.getElementById('email').classList.remove('is-invalid');

        }

        if (!values.password) {
            errors.password = "Please enter your password!";
            document.getElementById('password').classList.add('is-invalid');
            setIsValid(false)
        }
        // else if (typeof values.password !== "undefined") {
        //     setIsValid(false)
        //     errors.password = " You have entered wrong Password!"
        //     document.getElementById('password').classList.add('is-invalid');
        // }
        else if (values.password.length < 4) {
            setIsValid(false)
            errors.password = " You have entered wrong Password!";
            document.getElementById('password').classList.add('is-invalid');
        }
        else if (values.password.length > 10) {
            setIsValid(false)
            errors.password = " You have entered wrong Password!";
            document.getElementById('password').classList.add('is-invalid');
        }
        else {
            setIsValid(true)
            document.getElementById('password').classList.remove('is-invalid')
        }
        return errors;
    };

    return (
        <div className="container form-sign">
            {alert && Object.keys(formErrors).length === 0 && isValid && <div className="alert alert-success text-center" role="alert" style={{ margin: '5px auto', width: '20%' }} >{alert.msg}</div>}
            <div className="form-text">
                <h1> Welcome Back! </h1>
                <p>What will you learn today? Find out, with Algrow.</p>
            </div>
            <form className='form-back'
                onSubmit={handleSubmit}>
                <div className="mb-4 box">
                    <input type="text" className="form-control" placeholder='E-mail' id="email" name="email"
                        value={formValues.email}
                        onChange={handleChange} />
                    <small className="invalid-feedbacxk">{formErrors.email}</small>
                </div>
                <div className="mb-5 box">
                    <input type="password" className="form-control" placeholder='Password' id="password" name="password"
                        value={formValues.password}
                        onChange={handleChange} />
                    <small className="invalid-feedback">{formErrors.password}</small>
                </div>
                <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox"
                        name="checkbox"
                        value={formValues.checkbox}
                        onChange={handleChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in
                    </label>
                    <Link to="/">Forgot password?</Link>
                </div>
                <div className="btn-contained">
                    <button type="submit" className="btn btn-primary">Log In</button>
                </div>
            </form>
        </div>

    );
}

export default Login;


*/


