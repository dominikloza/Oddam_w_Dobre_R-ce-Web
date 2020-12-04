import React from "react";

function OneColumn({nr, title}) {
    return (
        <div className="singleColumn">
                <h1>{nr}</h1>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
        </div>
    )
}

export default OneColumn;