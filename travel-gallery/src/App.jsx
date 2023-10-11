import React from "react";
import Paragraph from "./Paragraph";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import SpecialsSection from "./components/SpecialsSection/SpecialsSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
    return (
        <div className="container">
            <HeaderSection />
            <Paragraph />
            <SpecialsSection />
            <Paragraph />
            <FooterSection />
        </div>
    );
}

export default App;
