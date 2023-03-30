import styled from "styled-components";

export const ContainerRedes = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    @media (max-width: 820px) {
        width: 100%;
        text-align: center;
        margin-top: 0;
    }
`
export const CardRedes =styled.div`
    display: flex;
    #Circle{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background:#00B6DE;
        transition: all 0.3s ease-in-out;
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover{
            background: transparent;
            border: 1px solid #00B6DE;
            cursor: pointer;
        }
        &last-child{
            margin-right: 0;
        }
        
    }
    @media (max-width: 820px) {
        text-align: center;
        justify-content: center;
        margin-right: 0;
    }
`
