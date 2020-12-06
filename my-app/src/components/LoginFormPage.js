import React from 'react';
import HomeHeader from "./HomeHeader";
import decoration from '../assets/Decoration.svg';
import {useFormik} from "formik";

const LoginFormPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
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
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <label htmlFor="lastName">Hasło</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <button type="submit">Zaloguj się</button>
                    <h2 className="register">Zarejestruj się</h2>
                </form>

            </div>
        </div>
    );
};

export default LoginFormPage;