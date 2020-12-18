import React from "react";
import photo from "../assets/Hero Image.png";
import decoration from "../assets/Decoration.svg"
import Button from "./Button";
import {Link} from "react-router-dom";
function HomeFirstSection({isLogged}) {
    return (
        <div className="firstSection">
            <img className="firstPhoto" src={photo} alt=""/>
            <div className="firstSectionContent">
                <h2 className="title">Zacznij pomagać!</h2>
                <h2 className="title">Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className="decoration" src={decoration} alt=""/>
                <div className="buttons">
                    <Link to={isLogged ? "oddaj-rzeczy" : "/logowanie"}><Button width="310px" height="120px" text1='ODDAJ' text2="RZECZY" size="34px"/></Link>
                    <Link to={isLogged ? "oddaj-rzeczy" : "/logowanie"}><Button width="310px" height="120px" text1='ZORGANIZUJ' text2="ZBIÓRKĘ" size="34px"/></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeFirstSection;