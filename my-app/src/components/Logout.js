import React from 'react';
import HomeHeader from "./HomeHeader";
import decoration from '../assets/Decoration.svg';
import {Link} from "react-router-dom";

const Logout = ({user}) => {
    console.log(user)
    return (
        <div className="logout">
            <HomeHeader/>
            <div className="logout__content">
                <h1>Wylogowanie nastąpiło <br></br> pomyślnie</h1>
                <img src={decoration} alt=""/>
                <Link to="/"><h2 className="logoutButton">Strona Główna</h2></Link>
            </div>
        </div>
    )
}

export default Logout;