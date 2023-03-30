import styled from "styled-components";

export const ContainerRightFourthCard = styled.div`
    width: 55%;
    height: 80%;
    margin-left: 3%;
    #comentario{
        width: 70%;
        color:#1C2C44 ;
        margin-top: 2rem;
        font-size: 22px;
    }
    @media (max-width: 820px) {
        width: 100%;
        margin-left: 1rem;
        #comentario{
            width: 98%;
            font-size: 16px;
            h2{
                width: 100%;
            }
        }
    }
`