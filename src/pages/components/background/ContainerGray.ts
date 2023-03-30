import styled from "styled-components";

export const BackgroundGray = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    @media (max-width: 820px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 1rem;
    }
`