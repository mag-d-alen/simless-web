import styled from "styled-components";

export const AccordionContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  margin-bottom: 5rem;
`;
export const AccordionInner = styled.div<{
  active: boolean;
}>`
  transition: max-height 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  max-height: ${({ active }) => (active ? "100%" : "50%")};
  padding: 0 2rem;
  margin: 0 1rem;
`;
export const AccordionTitle = styled.h3`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: darkslategray;
`;

export const AccordionContent = styled.div<{
  active: boolean;
}>`
  transition: max-height 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  max-height: ${({ active }) => (active ? "20rem" : 0)};
  overflow: hidden;
  display: flex;
  padding: ${({ active }) => (active ? "0 1rem 1rem 1rem" : "0 1rem ")};
  margin: 0;
  overflow: hidden;
  border-bottom: 0.03rem solid #a854f7;
`;
