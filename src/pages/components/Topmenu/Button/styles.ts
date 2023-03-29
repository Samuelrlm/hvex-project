import styled from "styled-components";

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    button{
        margin-left: 3rem;
    }
    @media (max-width: 600px) {
        display: none;
    }
`