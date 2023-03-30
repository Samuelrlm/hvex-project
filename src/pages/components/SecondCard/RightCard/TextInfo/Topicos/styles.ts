import styled from "styled-components";

export const ContainerTopicos = styled.div`
    width: 70%;
    margin-top: 3rem;
    @media (max-width: 820px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        justify-items: center;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }
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
        display: none;
    }
    img{
        height: 20px;
        width: 20px;
        margin-right: 1.5rem;
    }
    @media (max-width: 820px) {
        width: 95%;
        font-size: 16px;
        height: 0;
        margin-left: 1rem;
        p{
            width: 86%;
        }
    }
`