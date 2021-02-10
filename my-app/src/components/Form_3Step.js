import React from 'react';
import {Field, Formik} from "formik";


const Form3Step = ({setCurrentStep, saveData}) => {
    return (
    <div>
        <Formik
            initialValues={{
                checkedCharity: [],
                cityOfCharity: '',
                optional: '',
            }}
            onSubmit={(values) => {
                saveData(values);
                setCurrentStep(4);
            }}
        >
            {(props) => (
                <>
                    <div className="warning"><span>Ważne!</span>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                        organizacji w wyszukiwarce. Możesz też filtrować organizacje <br/> po ich lokalizacji bądź celu
                        ich
                        pomocy.
                    </div>
                    <div className="thirdStep">
                        <div className="container">
                            <h3>Krok 3/4</h3>
                            <form onSubmit={props.handleSubmit}>
                                <label htmlFor="numOfBags">Lokalizacja:</label>
                                <select id="city" name="cityOfCharity" form="city" onChange={props.handleChange}
                                        value={props.values.cityOfCharity}>
                                    <option selected> — wybierz —</option>
                                    <option>Poznań</option>
                                    <option>Warszawa</option>
                                    <option>Kraków</option>
                                    <option>Wrocław</option>
                                    <option>Katowice</option>
                                </select>
                                <h3>Komu chcesz pomóc?</h3>
                                <div className="checkboxCharity">
                                    <div className="checkbox">
                                        <label className="buttonCheckbox">
                                            <Field type="checkbox" name="checkedCharity" value="dzieciom"/>
                                            <span></span>
                                            dzieciom </label>
                                    </div>
                                    <div className="checkbox">
                                        <label className="buttonCheckbox">
                                            <Field type="checkbox" name="checkedCharity" value="samotnym matkom"/>
                                            <span></span>
                                            samotnym matkom
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label className="buttonCheckbox">
                                            <Field type="checkbox" name="checkedCharity" value="bezdomnym"/>
                                            <span></span>
                                            bezdomnym
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label className="buttonCheckbox">
                                            <Field type="checkbox" name="checkedCharity" value="niepełnosprawnym"/>
                                            <span></span>
                                            niepełnosprawnym
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label className="buttonCheckbox">
                                            <Field type="checkbox" name="checkedCharity" value="osobom starszym"/>
                                            <span></span>
                                            osobom starszym
                                        </label>
                                    </div>
                                </div>
                                <label htmlFor="optional">
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                                <input type="text" id="optional" name="optional" value={props.values.optional}
                                       onChange={props.handleChange}/>
                                <button className="form_button">Dalej</button>
                                <button className="form_button back" onClick={() => setCurrentStep(2)}>Wstecz</button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </Formik>
    </div>
    )
};

export default Form3Step;
