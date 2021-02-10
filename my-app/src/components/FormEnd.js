import React from 'react';
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
