import styled from "styled-components";

export const ContainerLeftComponent = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    @media (max-width: 820px) {
        width: 100%;
    }
`
export const ContainerBtnWpp = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media (max-width: 820px) {
        display: none;
    }
`