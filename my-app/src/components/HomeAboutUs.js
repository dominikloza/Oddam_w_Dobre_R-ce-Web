import React from 'react';
import people from '../assets/People.png'
import decoration from "../assets/Decoration.svg"
import signature from '../assets/Signature.svg'

const HomeAboutUs = () => {
    return (
        <div className="aboutUs" id="aboutUs">
            <div className="aboutUs__content">
                <h1>O nas</h1>
                <img src={decoration} alt=""/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="aboutUs__signature" src={signature} alt=""/>
            </div>
            <img className="aboutUs__img" src={people} alt=""/>
        </div>
    );
};

export default HomeAboutUs;