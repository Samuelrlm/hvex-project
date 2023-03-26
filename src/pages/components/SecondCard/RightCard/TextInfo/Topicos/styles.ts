import styled from "styled-components";

export const ContainerTopicos = styled.div`
    width: 70%;
    margin-top: 3rem;
`

export const Infos = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom:1.5rem;
    font-weight: bold;
    font-size: 20px;
    &:last-child{
        margin-bottom: 0;
    }
    img{
        height: 20px;
        width: 20px;
        margin-right: 1.5rem;
    }
`