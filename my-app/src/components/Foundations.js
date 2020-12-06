import React from 'react';

const Foundations = ({foundations}) => {
    return (
        <ul className="foundation__list">
            {foundations.map((item, index) => {
                return (
                    <>
                        <li key={index}>
                            <div className="foundation__main-content">
                                <h2 className="foundation__title">{item.title}</h2>
                                <p className="foundation__description">{item.description}</p>
                            </div>
                            <p className="foundation__items">{item.items}</p>
                        </li>
                        <div className="foundation__list__line"></div>
                    </>
                )
            })}
        </ul>
    );
};

export default Foundations;