import styled from "styled-components";

export const ContainerLeftFifth = styled.div`
    width: 40%;
    height: 70%;
    display: flex;
    flex-direction: column;
    #titulo{
        width: '75%';
        color:'#1C2C44';
        font-size: 22px;
    }
    #imagem{
        display: none;
    }
    @media (max-width: 820px) {
        width: 100%;
        #imagem{
            display: flex;
            img{
                width: 100%;
                margin-left: -1rem;
            }
        }
        #titulo{
            width: '100%';
            font-size: 16px;
            margin-top: 1rem;
        }
    }
`