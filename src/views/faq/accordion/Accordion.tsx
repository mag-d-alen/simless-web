import React, { useState, useRef } from "react";
import { faqData } from "../../../data/data";
import { ChevronDown } from "../../editButton/icons/ChevronDown";

import {
  AccordionContainer,
  AccordionTitle,
  AccordionContent,
  AccordionInner,
} from "./accordion.styled";

export const Accordion: React.FC = () => {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(null);

  return (
    <AccordionContainer>
      {faqData.map((datum, i) => (
        <AccordionInner active={currentAccordion === i} key={i}>
          <AccordionTitle
            onClick={() => {
              currentAccordion === i
                ? setCurrentAccordion(null)
                : setCurrentAccordion(i);
            }}>
            {datum.title}
            <span>{currentAccordion !== i ? <ChevronDown /> : "-"}</span>
          </AccordionTitle>
          <AccordionContent active={currentAccordion === i}>
            {datum.content}
          </AccordionContent>
        </AccordionInner>
      ))}
    </AccordionContainer>
  );
};
