import styled from "styled-components";

export const ToggleButton = styled.div<{ right: boolean }>`
  display: flex;
  filter: drop-shadow(0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.1));
  background-color: aliceblue;
  display: flex;
  width: 5rem;
  height: 1.5rem;
  border-radius: 1rem;
`;

export const ToggleZip = styled.div<{ right: boolean }>`
  display: flex;
  background-color: #00008b82;
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
