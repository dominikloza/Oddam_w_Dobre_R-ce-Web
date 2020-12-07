import React from 'react';
import HomeHeader from "./HomeHeader";
import decoration from '../assets/Decoration.svg';
import {useFormik} from "formik";

const RegisterFormPage = () => {


    const validate = values => {
        const errors = {};

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email.length ) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }

        if (values.password.length < 6 && values.password.length) {
            errors.password = 'Hasło jest za krótkie!';
        }

        if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = 'Hasła nie są takie same!';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordRepeat: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="registerPage">
            <HomeHeader/>
            <div className="registerPage__content">
                <h1>Zarejestruj się</h1>
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
                    <label htmlFor="passwordRepeat">Powtórz hasło</label>
                    <input
                        id="passwordRepeat"
                        name="passwordRepeat"
                        type="password"
                        className={formik.errors.passwordRepeat ? "errorInput" : null}
                        onChange={formik.handleChange}
                        value={formik.values.passwordRepeat}
                    />
                    {formik.errors.passwordRepeat ? <div className="error">{formik.errors.passwordRepeat}</div> : null}
                    <button type="submit">Stwórz konto</button>
                    <h2 className="login">Zaloguj się</h2>
                </form>

            </div>
        </div>
    );
};

export default RegisterFormPage;