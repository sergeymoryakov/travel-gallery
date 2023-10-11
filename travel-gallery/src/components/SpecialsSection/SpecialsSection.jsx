import React from "react";
import SpecialsTitle from "./SpecialsTitle";
import SpecialsCard from "./SpecialsCard";
import Button from "../Buttons/Button";

function SpecialsSection() {
    return (
        <div>
            <SpecialsTitle />
            <SpecialsCard />
            <SpecialsCard />
            <SpecialsCard />
            <SpecialsCard />
            <Button />
        </div>
    );
}
export default SpecialsSection;
