import React from "react";
import tbilisiImg from "../../assets/tbilisi.jpg";

const tbilisiProps = {
    imgSrc: tbilisiImg,
    imgAlt: "Tbilisi View",
    by: "By Bus",
    group: 10,
    destination: "Tbilisi",
    date: "April",
    price: 830.0,
};

function TestCard() {
    return (
        <div>
            <div>
                {tbilisiProps.by} - {tbilisiProps.group}
            </div>
            <div>
                <img src={tbilisiProps.imgSrc} alt={tbilisiProps.imgAlt} />
            </div>
            <div>
                {tbilisiProps.destination}, {tbilisiProps.date} -- $
                {tbilisiProps.price}
            </div>
        </div>
    );
}
export default TestCard;
