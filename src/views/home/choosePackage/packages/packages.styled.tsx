import styled from "styled-components";

export const PackageCardContainer = styled.div`
  margin: 1rem;
  background-color: white;
  width: 15rem;
  border-radius: 0.3rem;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  :hover {
    filter: drop-shadow(0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.5));
  }
`;
export const PackagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const PackageCardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;
export const PackageCardBody = styled.div`
  padding: 0.5rem;
  display: flex;
`;
export const PackageCardGigaOption = styled.div`
  width: 30%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;
export const PackageCardCountries = styled.div`
  display: flex;
  height: 3rem;
  padding: 0.5rem;
  overflow: auto;
`;
export const PackageCardPrice = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
`;
export const PackageCardButtons = styled.div`
  display: flex;
`;
