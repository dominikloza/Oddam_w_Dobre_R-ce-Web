import React from 'react';
import svg1 from "../assets/IconForm.png"
import svg2 from '../assets/Icon.png'
import {connect} from "react-redux";

const FormSummary = ({setCurrentStep, kartofel}) => {

    console.log(kartofel)
    return (
        <>
            <div className="formSummary">
                <div className="container">
                    <h2>Podsumowanie Twojej darowizny</h2>
                    <h3>Oddajesz:</h3>
                    <h4><img src={svg2} alt=""/> 4 {kartofel}</h4>
                    <h4><img src={svg1} alt=""/> dla lokalizacji:</h4>
                    <form>
                        <div>
                            <h3>Adres odbioru:</h3>
                            <div className="form__side">
                                <div>
                                    <h3>Ulica</h3>
                                    <h3>Miasto</h3>
                                    <h3>Kod<br/>pocztowy</h3>
                                    <h3>Nr<br/>telefonu</h3>
                                </div>
                                <div>
                                    <h3>cos</h3>
                                    <h3>cos</h3>
                                    <h3>cos</h3>
                                    <h3>cos</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Termin odbioru:</h3>
                            <div className="form__side">
                                <div>
                                    <h3>Data</h3>
                                    <h3>Godzina</h3>
                                    <h3>Uwagi<br/>dla kuriera</h3>
                                </div>
                                <div>
                                    <h3>cos</h3>
                                    <h3>cos</h3>
                                    <h3>cos</h3>
                                </div>
                            </div>
                        </div>
                        <button className="form_button" onClick={() => setCurrentStep(6)}>Potwierdzam</button>
                        <button className="form_button back" onClick={() => setCurrentStep(4)}>Wstecz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        kartofel: state.checked
    };
};

export default connect(mapStateToProps)(FormSummary);