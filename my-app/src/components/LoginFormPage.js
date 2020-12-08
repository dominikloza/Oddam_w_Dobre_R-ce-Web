import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import decoration from '../assets/Decoration.svg';
import {useFormik} from "formik";
import fire from "../firebase";
import Home from "./Home";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginFormPage = () => {

    let history = useHistory();

    const validate = values => {
        const errors = {};

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.email.length) {
            errors.email = 'Podany email jest nieprawidłowy!';
            setErrorLogin("");
        }

        if (values.password.length < 6 && values.password.length) {
            errors.password = 'Hasło jest za krótkie!';
            setErrorLogin("");
        }


        return errors;
    };

    const [errorLogin, setErrorLogin] = useState("");

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: (e) => {
            console.log("zalogowano");
           fire.auth().signInWithEmailAndPassword(formik.values.email, formik.values.password).then(() => {
               history.push("/");
            }).catch((error) => {
                console.log(error);
                setErrorLogin("Niepoprawny email lub hasło")
            });
        },
    });

    return (
        <>
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
                            className={formik.errors.password || errorLogin ? "errorInput" : null}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                        { errorLogin ? <div className="error">{errorLogin}</div> : null}
                        <button type="submit">Zaloguj się</button>
                        <Link to="/rejestracja"><h2 className="register">Zarejestruj się</h2></Link>
                    </form>

                </div>
            </div>
        </>
    );
};

export default LoginFormPage;