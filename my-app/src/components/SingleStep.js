import React from "react";


function SingleStep({link, text1, text2}) {
    return (
        <div className="singleStep">
            <img src={link} alt=""/>
            <h2>{text1}</h2>
            <div className="line"></div>
            <p>{text2}</p>
        </div>
    )
}

export default SingleStep;