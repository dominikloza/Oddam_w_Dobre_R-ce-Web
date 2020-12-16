import React from 'react';
import {useFormik} from "formik";


const Form1Step = ({setCurrentStep}) => {

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        onSubmit: values => {

        },
    });
    return (
        <>
            <div className="warning"><span>Ważne!</span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                będziemy wiedzieć komu najlepiej je przekazać.
            </div>
            <div className="firstStep">
                <div className="container">
                    <h3>Krok 1/4</h3>
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <form>
                        <div className="checkbox">
                            <label htmlFor="cloths">
                                <input type="checkbox" id="cloths" name="cloths"/>
                                <span></span>
                                ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="clothsToThrow">
                                <input type="checkbox" id="clothsToThrow" name="clothsToThrow"/>
                                <span></span>
                                ubrania, do wyrzucenia</label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="toys">
                                <input type="checkbox" id="toys" name="toys"/>
                                <span></span>
                                zabawki</label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="books">
                                <input type="checkbox" id="books" name="books"/>
                                <span></span>
                                książki</label>
                        </div>
                        <div className="checkbox">
                            <label htmlFor="others">
                                <input type="checkbox" id="others" name="others"/>
                                <span></span>
                                Inne</label>
                        </div>
                        <button className="form_button" onClick={() => setCurrentStep(2)}>Dalej</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form1Step;