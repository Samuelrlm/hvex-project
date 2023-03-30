import styled from "styled-components";

export const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
`;