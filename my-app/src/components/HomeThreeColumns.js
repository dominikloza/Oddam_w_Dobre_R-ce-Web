import React from "react";
import OneColumn from "./OneColumn";

function HomeThreeColumns() {
    return (
        <div className="columnsBackground">
            <div className="container">
                <div className="columns">
                    <OneColumn nr="10" title="ODDANYCH WORKÓW"/>
                    <OneColumn nr="5" title="WSPARTYCH ORGANIZACJI"/>
                    <OneColumn nr="7" title="ZORGANIZOWANYCH ZBIÓREK"/>
                </div>
            </div>
        </div>
    )
}

export default HomeThreeColumns;