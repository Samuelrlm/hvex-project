import styled from "styled-components";

export const  Container = styled.div`
    #titulo{
        display: flex;
        color: white;
        h4{
            margin-top: 0.5rem;
            margin-left: 1rem;
        }
    }
    background-color:#252835;
    position: fixed;
    height: 100%;
    top: 0;
    width: 300px;
    animation: showSidebar .4s;
    box-shadow:0px 10px 40px -12px #00000056;
    z-index: 3;
    svg{
        position: fixed;
        width: 35px;
        height: 35px;
        margin-left: 16rem;
        margin-top: 0.6rem;
        cursor: pointer;
        animation: showClose .6s;
    }

    @keyframes showSidebar {
        from{
            opacity: 0;
            width: 0;
        }
        to{
            opacity: 1;
            width: 300px;
        }
    }
    @media (max-width: 820px) {
        #titulo{
            h4{
                margin-top: 0.8rem;
            }
        }
    }
`

export const Content = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    height: 65vh;
    gap: 12px;
    overflow:auto;
    #opcoes{
        width: 100%;
        display: flex;
        flex-direction: column;
        label{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 50px;
            border: 1px solid #00B6DE;
            border-top: none;
            border-left: none;
            border-right: none;
        }
    }
`