import React from 'react';
import {useFormik} from "formik";


const Form4Step = ({setCurrentStep}) => {

    const formik = useFormik({
        initialValues: {
            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            hour: '',
            comment: '',
        },
        onSubmit: values => {
            setCurrentStep(5)
        },
    });

    return (
        <>
            <div className="warning"><span>Ważne!</span>Podaj adres oraz termin odbioru rzeczy.
            </div>
            <div className="fourthStep">
                <div className="container">
                    <h3>Krok 4/4</h3>
                    <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form__side">
                            <h3>Adres odbioru:</h3>
                            <div>
                                <label htmlFor="street">Ulica</label>
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.street}
                                />
                            </div>
                            <div>
                                <label htmlFor="city">Miasto</label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                />
                            </div>
                            <div>
                                <label htmlFor="postCode">Kod<br/>pocztowy</label>
                                <input
                                    id="postCode"
                                    name="postCode"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.postCode}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Nr<br/>telefonu</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                            </div>
                        </div>
                        <div className="form__side">
                            <h3>Termin odbioru:</h3>
                            <div>
                                <label htmlFor="date">Data</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                />
                            </div>
                            <div>
                                <label htmlFor="hour">Godzina</label>
                                <input
                                    id="hour"
                                    name="hour"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.hour}
                                />
                            </div>
                            <div>
                                <label htmlFor="comments">Uwagi<br/>dla kuriera</label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    onChange={formik.handleChange}
                                    value={formik.values.comments}
                                />
                            </div>
                        </div>
                        <button className="form_button">Dalej</button>
                        <button className="form_button back" onClick={() => setCurrentStep(3)}>Wstecz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form4Step;