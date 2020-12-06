import React from "react";
import {Link as LinkTo} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function HomeHeader() {
    return (
        <div className="header">
            <div className="container">
                <ul className="upperMenu">
                        <LinkTo to="/logowanie">
                            <li>Zaloguj</li>
                        </LinkTo>
                        <LinkTo to="/rejestracja">
                            <li>Zarejestruj</li>
                        </LinkTo>
                </ul>
                <ul className="bottomMenu">
                    <LinkTo
                        to="/"
                    ><li>Start</li></LinkTo>
                    <Link
                        to="sectionFourSteps"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><li>O co chodzi?</li></Link>
                    <Link
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><li>O nas</li></Link>
                    <Link
                        to="foundations"
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><li>Fundacja i organizacje</li></Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><li>Kontakt</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default HomeHeader;