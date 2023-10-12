import React from "react";

function SpecialsCard(props) {
    return (
        <div>
            <div>
                {props.by} - {props.group}
            </div>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <div>
                {props.destination}, {props.date} -- ${props.price}
            </div>
        </div>
    );
}
export default SpecialsCard;
