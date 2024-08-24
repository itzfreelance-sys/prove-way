import Accordion from "./Accordion";
import React, { useState } from "react";
import { Sections } from "./molecule/Sections";
import CustomButton from "./atoms/Button";
import TotalAmount from "./Totalamount/TotalAmount";

const App: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto", // Center horizontally
        height: "100vh", // Full viewport height
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "21.08px",
          lineHeight: "25.51px",
          marginBottom: "28px",
          color: "#ff6b82",
        }}
      >
        YAY! It’s BOGO
      </span>
      <Accordion
        sections={Sections}
        openIndex={openIndex}
        onToggleAccordion={handleToggleAccordion}
      />
      <TotalAmount />
      <CustomButton />
    </div>
  );
};

export default App;
