import styled from "styled-components";

export const AddAnimation = styled.div`
  animation: fadeIn 0.2s cubic-bezier(0.1, 0.7, 1, 0.1);
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.4;
    }
    70% {
      opacity: 75%;
    }
    100% {
      opacity: 1;
    }
  }
`;
