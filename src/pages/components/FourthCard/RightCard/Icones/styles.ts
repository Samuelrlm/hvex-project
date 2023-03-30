import styled from "styled-components";

export const ContainerIcones = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 3rem;
    @media (max-width: 820px) { 
        width: 100%;
        margin-top: 1rem;
        margin-left: -0.8rem;
    }
`
export const CircleIcoes = styled.div`
    width: 76.79px;
    height: 76.79px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1B2033;
    @media (max-width: 820px) {
        width: 50px;
        height: 50px;
        img{
            width: 30px;
        }
    }
`

export const CardIcones = styled.div`
    margin-top: 1rem;
    width: 145.9px;
    height: 141.1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p{
        width: 94%;
        margin-top: 1rem;
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        color: #263238;
    }
    @media (max-width: 820px) {
        margin-top: 0;
        width: 90px;
        p{
            width: 100%;
            font-size: 10px;
            margin-top: 0.5rem;
        };
    }
`