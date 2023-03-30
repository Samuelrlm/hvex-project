import styled from "styled-components";

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 64%;
    height: auto;
    margin-left: 5rem;
    @media (max-width: 820px) {
        width: 90%;
        margin-left: 1rem;
        margin-top: 60px;
    }
`
export const Titulo = styled.div`
    h1{
        font-size: 48px;
    }
    @media (max-width: 820px) {
        h1{
            font-size: 22px;
        }
        font-size: medium;
    }
`

export const Info = styled.div`
    margin-top: 2rem;
    width: 85%;
    p{
        font-size: 20px;
        margin-bottom: 5rem;
    }
    @media (max-width: 820px) {
        p{
            font-size: 16px;
        }
    }
`