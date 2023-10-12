import React from "react";
import "./Card.css";

function Card({ destination }) {
    return (
        <>
            <div className="card">
                <img
                    className="image"
                    src={destination.imgSrc}
                    alt={destination.imgAlt}
                />
            </div>
            <span></span>
            <div>
                {destination.by} - {destination.group}
            </div>
            <div>
                {destination.destination}, {destination.date} -- $
                {destination.price}
            </div>
        </>
    );
}

export default Card;
