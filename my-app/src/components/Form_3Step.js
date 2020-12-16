import React from 'react';
import {useFormik} from "formik";


const Form3Step = ({setCurrentStep}) => {

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        onSubmit: values => {
            setCurrentStep(4);
        },
    });

    return (
        <>
            <div className="warning"><span>Ważne!</span>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                organizacji w wyszukiwarce. Możesz też filtrować organizacje <br/> po ich lokalizacji bądź celu ich
                pomocy.
            </div>
            <div className="thirdStep">
                <div className="container">
                    <h3>Krok 3/4</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="numOfBags">Lokalizacja:</label>
                        <select id="city" name="city" form="city" onChange={formik.handleChange}
                                value={formik.values.city}>
                            <option disabled selected> — wybierz — </option>
                            <option value="poznan">Poznań</option>
                            <option value="warszawa">Warszawa</option>
                            <option value="krakow">Kraków</option>
                            <option value="wroclaw">Wrocław</option>
                            <option value="katowice">Katowice</option>
                        </select>
                        <h3>Komu chcesz pomóc?</h3>
                        <div>
                            <button className="buttonCheckBox">dzieciom</button>
                            <button className="buttonCheckBox">samotnym matkom</button>
                            <button className="buttonCheckBox">bezdomnym</button>
                            <button className="buttonCheckBox">niepełnosprawnym</button>
                            <button className="buttonCheckBox">osobom starszym</button>
                        </div>

                        <label htmlFor="optional">
                            Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type="text" id="optional" name="optional"/>


                        <button className="form_button" >Dalej </button>
                        <button className="form_button back" onClick={() => setCurrentStep(2)}>Wstecz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form3Step;