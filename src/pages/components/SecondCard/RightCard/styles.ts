import styled from "styled-components";

export const RightContainerSecond = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 820px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 1rem;
    }
`