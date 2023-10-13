import React from "react";
import Title from "../Titles/Title";
// import Button from "../Buttons/Button";
import Gallery from "../Gallery/Gallery";
import { seasonSpecials } from "../../data/data";

function SpecialsSection() {
    return (
        <div>
            <Title text="Season Specials" />

            <Gallery seasonSpecials={seasonSpecials} />

            {/* <Button text="Check All Destinations" /> */}
        </div>
    );
}
export default SpecialsSection;
