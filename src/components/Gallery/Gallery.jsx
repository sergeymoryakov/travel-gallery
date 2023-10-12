import React from "react";
import Card from "../Gallery/Card";
import "./Gallery.css";

function Gallery({ seasonSpecials }) {
    return (
        <ul>
            {seasonSpecials.map((destination, index) => (
                <li key={index}>
                    <Card destination={destination} />
                </li>
            ))}
        </ul>
    );
}
export default Gallery;
