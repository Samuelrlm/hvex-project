import styled from "styled-components";

export const ContainerLogo = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items:center;
    justify-content: center;
    img{
        :hover{
            cursor: pointer;
        }
    }
    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        img{
            width: 100px;
        }
    }
`