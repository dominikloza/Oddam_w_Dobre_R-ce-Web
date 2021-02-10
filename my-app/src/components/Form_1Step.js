import React from 'react';
import {Field, Formik} from "formik";

const Form1Step = ({setCurrentStep, saveData}) => (
    <div>
        <Formik
            initialValues={{
                checked: [],
            }}
            onSubmit={(values) => {
                setCurrentStep(2);
                saveData(values);
            }}
        >
            {(props) => (
                <>
                    <div className="warning"><span>Ważne!</span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                        będziemy wiedzieć komu najlepiej je przekazać.
                    </div>
                    <div className="firstStep">
                        <div className="container">
                            <h3>Krok 1/4</h3>
                            <h2>Zaznacz co chcesz oddać:</h2>
                            <form onSubmit={props.handleSubmit}>
                                <div className="checkbox">
                                    <label>
                                        <Field type="checkbox" name="checked"
                                               value="ubrania, które nadają się do ponownego użycia"/>
                                        <span></span>
                                        ubrania, które nadają się do ponownego użycia </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <Field type="checkbox" name="checked" value="ubrania, do wyrzucenia"/>
                                        <span></span>
                                        ubrania, do wyrzucenia
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <Field type="checkbox" name="checked" value="zabawki"/>
                                        <span></span>
                                        zabawki
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <Field type="checkbox" name="checked" value="ksiązki"/>
                                        <span></span>
                                        książki
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <Field type="checkbox" name="checked" value="inne"/>
                                        <span></span>
                                        Inne
                                    </label>
                                </div>
                                <button className="form_button" onClick={props.handleSubmit} type="submit">Dalej</button>
                            </form>
                        </div>
                    </div>
                    </>
            )}
        </Formik>
    </div>
);

export default Form1Step;
