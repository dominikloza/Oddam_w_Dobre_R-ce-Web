import React from 'react';
import {useFormik} from "formik";


const Form2Step = ({setCurrentStep, saveData}) => {


    const formik = useFormik({
        initialValues: {
            numOfBags: '',
        },
        onSubmit: values => {
            saveData(values);
            setCurrentStep(3);
        },
    });
    return (
        <>
            <div className="warning"><span>Ważne!</span>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </div>
            <div className="secondStep">
                <div className="container">
                    <h3>Krok 2/4</h3>
                    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="numOfBags">Liczba 60l worków:</label>
                        <select id="numOfBags" name="numOfBags" form="numOfBags"  value={formik.values.bags} onChange={formik.handleChange}>
                            <option disabled selected> — wybierz — </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <button className="form_button">Dalej</button>
                        <button  className="form_button back" onClick={() => setCurrentStep(1)}>Wstecz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form2Step;
