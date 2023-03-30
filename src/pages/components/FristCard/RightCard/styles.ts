import styled from "styled-components";

export const RightContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url('src/images/dispositivo.png');
    background-repeat: no-repeat;
    background-position: 95%;
    background-size: 40%;
    position: absolute;
    z-index: 0;
    @media (max-width: 820px) {
        background-size: 67%;
    }
`