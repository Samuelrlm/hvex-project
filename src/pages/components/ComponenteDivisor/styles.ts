import styled from "styled-components";

export const ContainerComponenteDivisor = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #1C2C44;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerPrincipalDivisor = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    h2{
        color: #ffffff;
    }
    button{
        width: 220px;
        height: 48px;
    }

    @media (max-width: 820px) {
        width: 100%;
        h2{
            font-size: 1.5rem;
        }
    }
`