import styled from "styled-components";

export const ContainerMenu = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background: #252835;
    color: #ffffff;
    z-index: 3;
    #filtro{
        display: none;
    }
    @media (max-width: 600px) {
        display: flex;
        height: auto;
        padding: 0.5rem;
        #filtro{
            display: flex;
        }
    }
`