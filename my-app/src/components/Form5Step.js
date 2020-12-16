import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import photo from "../assets/Header-Form-Background.png";
import decoration from "../assets/Decoration.svg";
import Button from "./Button";
import Form1Step from "./Form_1Step";
import Form2Step from "./Form_2Step";
import Form3Step from "./Form_3Step";
import {saveData} from "../redux/actions";
import mapStateToProps from "react-redux";
import {connect} from "react-redux";
import Form4Step from "./Form_4Step";

const Form5Step = ({user, isLogged, setIsLogged}) => {

    const [currentStep, setCurrentStep] = useState(1);


        return (
            <div>
                <HomeHeader user={user} isLogged={isLogged} setIsLogged={setIsLogged}/>
                <div className="formSection">
                    <img className="formPhoto" src={photo} alt=""/>
                    <div className="formSection_Content">
                        <h2 className="title">Oddaj rzeczy, których już nie potrzebujesz</h2>
                        <h2 className="title">POTRZEBUJĄCYM</h2>
                        <img className="decoration" src={decoration} alt=""/>
                        <h2 className="formSection_text">Wystarczą 4 proste kroki</h2>
                        <div className="fourStep">
                            <div className="fourStep__Button"><span className="button_content"><span>1</span><br/>Wybierz rzeczy</span>
                            </div>
                            <div className="fourStep__Button"><span
                                className="button_content">2<br/>Spakuj je w worki</span></div>
                            <div className="fourStep__Button"><span
                                className="button_content">3<br/>Wybierz fundację</span>
                            </div>
                            <div className="fourStep__Button"><span
                                className="button_content">4<br/>Zamów kuriera</span>
                            </div>
                        </div>
                    </div>
                </div>
                { (currentStep === 1) && <Form1Step setCurrentStep={setCurrentStep}/>}
                {(currentStep === 2) && <Form2Step setCurrentStep={setCurrentStep}/>}
                {(currentStep === 3) && <Form3Step setCurrentStep={setCurrentStep}/>}
                {(currentStep === 4) && <Form4Step setCurrentStep={setCurrentStep}/>}
                <HomeContact/>
            </div>
        );
};


const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => {
            dispatch(saveData(data));
        },
    };
};

// export default connect(mapDispatchToProps)(Form5Step);
export default Form5Step;