import styled from "styled-components";

export const ContainerTopFooter = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    #card{
        width: 100%;
        height: 90%;
        display: flex;
        margin-top: 2rem;
        #logo{
            width: 25%;
        }
        h3{
            color:#52E0FF;
            margin-bottom: 2rem;
        }
        #endereco{
            margin-top: 2rem;
            width: 23%;
            p{
                color: #ffffff;
                width: 75%;
            }
        }
        #contato{
            margin-top: 2rem;
            width: 23%;
            p{
                color: #ffffff;
                margin-bottom: 1rem;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
    
`