import React, {useState} from 'react';
import {useFormik} from 'formik';
import decoration from '../assets/Decoration.svg';
import fb from '../assets/Facebook.png';
import ig from '../assets/Instagram.png'

const HomeContact = () => {

    const [successMess, setSuccessMess] = useState("");

    const validate = values => {
        const errors = {};
        if (values.name.includes(" ")) {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }

        if (values.message.length < 120) {
            errors.message = 'Wiadomośc musi mieć conajmniej 120 znaków!';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: e => {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.initialValues),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setSuccessMess( "Wiadomość została wysłana! Wkrótce się skontaktujemy.");
                    formik.resetForm();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
    });


    return (
        <div className="contact">
            <div className="contact__back">
            </div>
            <div className="contact__content">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt=""/>
                {successMess === "" ? null : <div className="successMess">{successMess}</div>}
                <form onSubmit={formik.handleSubmit}>
                    <div className="toPlace">
                        <div className="form__box">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={formik.errors.name ? "errorInput" : null}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                placeholder="Karol"
                            />
                            {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                        </div>
                        <div className="form__box">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={formik.errors.email ? "errorInput" : null}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="abc@xyz.pl"
                            />
                            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className="form__box-max">
                        <label htmlFor="mess">Wpisz swoją wiadomośc</label>
                        <textarea
                            id="message"
                            name="message"
                            className={formik.errors.message ? "errorInput" : null}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        {formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
            <footer>
                <h3>Copyright by Coders Lab</h3>
                <img src={fb} alt=""/>
                <img src={ig} alt=""/>
            </footer>
        </div>
    );
};

export default HomeContact;