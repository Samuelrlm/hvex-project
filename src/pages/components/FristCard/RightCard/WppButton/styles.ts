import styled from "styled-components";

export const ContainerWpp = styled.div`
    width: 55px;
    height: 55px;
    position: absolute;
    margin-right: 12rem;
    background: #00B6DE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    margin-bottom: 1rem;
    img{
        width: 35px;
        height: 35px;
        transition: all 0.3s ease-in-out;
    }
    :hover{
        cursor: pointer;
        background: #02B31F;
    }
`