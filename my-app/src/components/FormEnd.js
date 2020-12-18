import React from 'react';
import {useFormik} from "formik";
import svg1 from "../assets/IconForm.png"
import svg2 from '../assets/Icon.png'
import decoration  from '../assets/Decoration.svg'
const FormEnd = () => {


    return (
        <>
            <div className="formEnd">
                <div className="container">
                    <div className="end_content">
                    <h2> Dziękujemy za przesłanie formularza<br/> Na maila prześlemy wszelkie<br/> informacje o odbiorze.</h2>
                    <img src={decoration} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormEnd;