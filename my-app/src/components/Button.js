import React from "react";

function Button({width, height, text1, text2, size}) {
    return (
        <div className="button" style={{width, height, fontSize: size}}>
            <div style={{marginBottom: "10px"}}>
                {text1}
            </div>
            <div>
                {text2}
            </div>
        </div>
    )
}

export default Button;