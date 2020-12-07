import React from 'react';
import HomeHeader from "./HomeHeader";
import decoration from '../assets/Decoration.svg';
import {useFormik} from "formik";

const LoginFormPage = () => {


    const validate = values => {
        const errors = {};

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email.length) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }

        if (values.password.length < 6 && values.password.length) {
            errors.password = 'Hasło jest za krótkie!';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="loginPage">
            <HomeHeader/>
            <div className="loginPage__content">
                <h1>Zaloguj się</h1>
                <img src={decoration} alt=""/>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={formik.errors.email ? "errorInput" : null}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    <label htmlFor="password">Hasło</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={formik.errors.password ? "errorInput" : null}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                    <button type="submit">Zaloguj się</button>
                    <h2 className="register">Zarejestruj się</h2>
                </form>

            </div>
        </div>
    );
};

export default LoginFormPage;