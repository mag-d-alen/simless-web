import styled from "styled-components";

export const TopUpMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem;
`;

export const BalanceMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem;
`;

export const ProgressContainer = styled.div`
  width: 20rem;
  display: flex;
  height: 1rem;
  border: 1px solid #483d8b61;
  border-radius: 0.3rem;
`;
export const ProgressZipper = styled.div<{ step: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ step }) => `${step}%`};
  background-color: #483d8b61;
  border-radius: 0.3rem;
  color: white;
  padding: 0.3rem;
  font-size: 0.5rem;
  text-transform: uppercase;
`;
export const TopupTopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  color: white;
  height: 80%;
  width: 80%;
  gap: 1.5rem;
`;
