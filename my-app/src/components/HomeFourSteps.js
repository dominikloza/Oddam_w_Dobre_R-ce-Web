import React from "react";
import decoration from "../assets/Decoration.svg"
import SingleStep from "./SingleStep";
import tshirt from "../assets/Icon.png";
import bag from "../assets/Icon-1.png";
import search from "../assets/Icon-2.png";
import reload from "../assets/Icon-3.png";
import Button from "./Button";
import {Link} from "react-router-dom";
//rsc
function HomeFourSteps() {
    return (
        <div className="fourSteps" id="sectionFourSteps">
            <h1 className="fourStepsTitle">Wystarczą 4 proste kroki</h1>
            <img src={decoration} alt=""/>
            <div className="steps">
                    <div className="toPlaceSteps">
                        <SingleStep link={tshirt} text1="Wybierz rzeczy" text2="ubrania, zabawki, sprzęt i inne"/>
                        <SingleStep link={bag} text1="Spakuj je" text2="skorzystaj z worków na śmieci"/>
                        <SingleStep link={search} text1="Zdecyduj komu chcesz pomóc" text2="wybierz zaufane miejsce"/>
                        <SingleStep link={reload} text1="Zamów kuriera" text2="kurier przyjedzie w dogodnym terminie"/>
                </div>
            </div>
            <Link to="/logowanie"><Button width="310px" height="120px" text1='ODDAJ ' text2="RZECZY" size="34px"/></Link>
        </div>

    )
}

export default HomeFourSteps;