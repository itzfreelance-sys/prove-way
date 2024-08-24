import React from "react";
import "./App.css";

interface Section {
  id: number;
  title?: string;
  centeredContent?: React.ReactNode;
  content?: React.ReactNode;
  discountPercent?: any;
  currentPrice?: any;
  oldPrice?: any;
  optionalText?: any;
}

interface AccordionProps {
  sections: Section[];
  openIndex: number | null;
  onToggleAccordion: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  openIndex,
  onToggleAccordion,
}) => {
  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={section.id} className="accordion-item">
          <div
            className={`accordion-header ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="title-container"
              onClick={() => onToggleAccordion(index)}
            >
              {openIndex !== index && (
                <div className="title-right">
                  <h2 className="accordion-title">{section.title}</h2>
                </div>
              )}
              <div
                style={{ marginRight: section.optionalText ? "0px" : "70px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="radio"
                      name="discount"
                      id={`yes`} // Unique ID for each radio button
                      checked={openIndex === index} // Manage the checked state
                      readOnly // Read-only to prevent user interaction
                      style={{ marginRight: "8px" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          fontWeight: 400,
                          lineHeight: "17.5px",
                          fontSize: "14.46px",
                        }}
                      >
                        {" "}
                        {section.centeredContent}
                      </span>

                      {openIndex === index && section.discountPercent}
                    </div>
                    <div style={{ display: "flex" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          marginLeft: "6px",
                          fontSize: "14.46px",
                        }}
                      >
                        {section.currentPrice}
                      </span>
                      &nbsp;
                      <span
                        style={{
                          fontSize: "9.94px",
                          fontWeight: 400,
                          lineHeight: "12.03px",
                          textDecoration: "line-through",
                          marginTop: "4px",
                        }}
                      >
                        {section.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  lineHeight: "16.94px",
                  color: "#ff6b82",
                }}
              >
                &nbsp;
                {section.optionalText}
              </div>
            </div>

            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
                padding: openIndex === index ? "10px" : "0",
                marginLeft: "20px",
                overflow: "hidden", // To handle overflow when content is collapsed
                transition: "max-height 0.3s ease-out, padding 0.3s ease-out", // Smooth transition
              }}
            >
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
