import React from "react";
import tbilisiImg from "../../assets/tbilisi.jpg";

function SpecialsCard() {
    return (
        <div>
            <div>By Bus - Group: 10</div>
            <img src={tbilisiImg} alt="Image: Tbilisi" />
            <div>Tbilisi, October -- $830.00</div>
        </div>
    );
}
export default SpecialsCard;
