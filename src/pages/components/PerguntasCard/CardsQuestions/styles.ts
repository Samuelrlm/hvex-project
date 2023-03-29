import styled from "styled-components";

export const ContainerMainQuestions = styled.div`
    width: 60%;
    height: auto;
    margin-top: 2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const CardQuestion = styled.div`
    width: 93%;
    height: auto;
    min-height: 202px;
    border-radius: 10px;
    background: #F9F9F9;
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
    display: flex;
`
export const TituloCard = styled.div`
    width: 89%;
    padding: 1.5rem;
    color: #1C2C44;
    font-size:16px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    p{
        color: #373737;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
    }
`

export const LinhaDivisoria = styled.div`
    width: 100%;
    height: 1px;
    background: #D9D9D9;
    margin-top:2rem;
    margin-bottom: 1rem;
`

export const AreaButton = styled.div`
    width: 11%;
    height: 100%;
    display:flex;
    justify-content: center;
    img{
        width: 15px;
        margin-top: 3rem;
        cursor: pointer;
    }
`