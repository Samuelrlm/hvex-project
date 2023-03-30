import styled from "styled-components";

export const ContainerRightGrid = styled.div`
    display: grid;
    width: 100%;
    height: 80%;    
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    @media (max-width: 820px) { 
        width: auto;
        grid-row-gap: 10px;
        grid-column-gap: 25px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`
export const CardGrid = styled.div`
    width: 242px;
    height: 248px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1C2C44;
    color: #52E0FF;
    text-align: center;
    border: 2px solid #52E0FF;
    border-radius: 10px;
    #text{
        width: 85%;
    }
    h2{
        margin-top: 1.5rem;
    }
    @media (max-width: 820px) {
        width: 100px;
        height: 110px;
        img{
            width: 50px;
        }
        h2{
            font-size: 12px;
            margin-top: 5px;
        }
    }
`