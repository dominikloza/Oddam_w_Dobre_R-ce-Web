import React from 'react';
import {Field, Form, Formik, useFormik} from "formik";
import {reducer} from "../redux/reducer";
import {SAVE_DATA} from "../redux/actionTypes";



// const Form1Step = ({setCurrentStep}) => {
//
//     const formik = useFormik({
//         initialValues: {
//             city: '',
//         },
//         onSubmit: values => {
//
//         },
//     })
//
//     return (
//         <>
//             <div className="warning"><span>Ważne!</span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
//                 będziemy wiedzieć komu najlepiej je przekazać.
//             </div>
//             <div className="firstStep">
//                 <div className="container">
//                     <h3>Krok 1/4</h3>
//                     <h2>Zaznacz co chcesz oddać:</h2>
//                         <Form>
//                             <div className="checkbox">
//                                 <label htmlFor="cloths">
//                                     <Field type="checkbox" id="cloths" name="cloths"/>
//                                     <span></span>
//                                     ubrania, które nadają się do ponownego użycia</label>
//                             </div>
//                             <div className="checkbox">
//                                 <label htmlFor="clothsToThrow">
//                                     <Field type="checkbox" id="clothsToThrow" name="clothsToThrow"/>
//                                     <span></span>
//                                     ubrania, do wyrzucenia</label>
//                             </div>
//                             <div className="checkbox">
//                                 <label htmlFor="toys">
//                                     <input type="checkbox" id="toys" name="toys"/>
//                                     <span></span>
//                                     zabawki</label>
//                             </div>
//                             <div className="checkbox">
//                                 <label htmlFor="books">
//                                     <Field type="checkbox" id="books" name="books"/>
//                                     <span></span>
//                                     książki</label>
//                             </div>
//                             <div className="checkbox">
//                                 <label htmlFor="others">
//                                     <Field type="checkbox" id="others" name="others"/>
//                                     <span></span>
//                                     Inne</label>
//                             </div>
//                             <button className="form_button" onClick={() => setCurrentStep(2)}>Dalej</button>
//                         </Form>
//                 </div>
//             </div>
//         </>
//     );
// };
const Form1Step = ({setCurrentStep, saveData}) => (
    <div>
        <Formik
            initialValues={{
                checked: [],
            }}
            onSubmit={(values, action) => {
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