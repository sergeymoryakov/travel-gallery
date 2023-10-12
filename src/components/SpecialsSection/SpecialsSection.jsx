import React from "react";
import Title from "../Titles/Title";
import SpecialsCard from "./SpecialsCard";
import Button from "../Buttons/Button";
import TestCard from "../TestElements/testCard";

import tbilisiImg from "../../assets/tbilisi.jpg";
import istanbulImg from "../../assets/istanbul.jpg";
import dubaiImg from "../../assets/dubai.jpg";
import phuketImg from "../../assets/phuket.jpg";

function SpecialsSection() {
    return (
        <div>
            <Title text="Season Specials" />

            <TestCard />

            {/* <SpecialsCard
                imgSrc={tbilisiImg}
                imgAlt="Tbilisi View"
                by="By Bus"
                group="10"
                destination="Tbilisi"
                date="April"
                price="830.00"
            />
            <SpecialsCard
                imgSrc={istanbulImg}
                imgAlt="Istanbul View"
                by="By Air"
                group=""
                destination="Istanbul"
                date="November"
                price="1100.00"
            />
            <SpecialsCard
                imgSrc={dubaiImg}
                imgAlt="Dubai View"
                by="By Air"
                group="15"
                destination="Dubai"
                date="June"
                price="2200.00"
            />
            <SpecialsCard
                imgSrc={phuketImg}
                imgAlt="Phuket View"
                by="By Air and Sea"
                group="11"
                destination="Phuket"
                date="September"
                price="1350.00"
            /> */}
            <Button text="Check All Destinations" />
        </div>
    );
}
export default SpecialsSection;
