import styled from "styled-components";
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.div<{ active: boolean }>`
  display: flex;
  text-align: center;
  text-transform: uppercase;
  padding-top: 0.5rem;
  color: ${({ active }) => (active ? "black" : "slategray")};
`;
