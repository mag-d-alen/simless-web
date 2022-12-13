import styled from "styled-components";

export const ToggleButton = styled.div<{ right: boolean }>`
  display: flex;
  background-color: white;
  display: flex;
  width: 5rem;
  height: 1.5rem;
  border-radius: 1rem;
  margin: 0 0.5rem;
`;

export const ToggleZip = styled.div<{ right: boolean }>`
  display: flex;
  background-color: #7e3af2;
  height: 1.5rem;
  border-radius: 1rem;
  width: 50%;
  margin: ${({ right }) => (right ? "0 0 0 auto" : "0 auto 0 0 ")};
`;
export const Divider = styled.div<{ height: string }>`
  display: flex;
  height: ${({ height }) => `${height}rem`};
  width: 100%;
`;
