import React, { useState, useRef } from "react";
import { faqData } from "../../../data/data";
import { splitAndCapitalize } from "../../../data/splitAndCapitalize";
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
    <div className="flex content-center flex-col bg-white py-2 w-full rounded mt-2 pb-10">
      {faqData.map((datum, i) => (
        <AccordionInner active={currentAccordion === i} key={i}>
          <h3
            className="flex pointer text-center justify-between text-gray-500 py-4 px-2"
            onClick={() => {
              currentAccordion === i
                ? setCurrentAccordion(null)
                : setCurrentAccordion(i);
            }}>
            {splitAndCapitalize(datum.title)}
            <span>{currentAccordion !== i ? <ChevronDown /> : "-"}</span>
          </h3>
          <AccordionContent active={currentAccordion === i}>
            {datum.content}
          </AccordionContent>
        </AccordionInner>
      ))}
    </div>
  );
};
