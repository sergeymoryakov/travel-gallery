import React from "react";
import "./Title.css";

function Title(props) {
    return (
        <div>
            <h1 className="specialsTitle">{props.text}</h1>
        </div>
    );
}
export default Title;
