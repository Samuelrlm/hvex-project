import styled from "styled-components";

export const ContainerRightGrid = styled.div`
    display: grid;
    width: 100%;
    height: 80%;    
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
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
`