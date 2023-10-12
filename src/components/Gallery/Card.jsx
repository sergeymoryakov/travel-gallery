import React from "react";
import "./Card.css";
import peopleIcon from "../../assets/bi_people-fill.png";

function Card({ destination }) {
    return (
        <div>
            <div className="card">
                <img
                    className="image"
                    src={destination.imgSrc}
                    alt={destination.imgAlt}
                />
                <div className="topMessage">
                    <div className="pipka">{destination.by}</div>
                    {destination.group > 0 && (
                        <div className="pipka">
                            {destination.group}
                            <img src={peopleIcon} alt="" />
                        </div>
                    )}
                </div>
                <div className="bottomMessage">
                    <div>
                        {destination.destination}, {destination.date} - $
                        {destination.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
