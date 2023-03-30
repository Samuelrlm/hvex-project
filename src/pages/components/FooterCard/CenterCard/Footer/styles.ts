import styled from 'styled-components'

export const ContainerFooterPart = styled.div`
    width: 100%;
    height: 30%;
`
export const ContainerInfos = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    #registro{
        width: 70%;
    }
    label{
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
    }
    @media (max-width: 820px) {
        display: flex;
        align-items: center;
        justify-content: center;
        #tag{
            display: none;
        }
        #registro{
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            label{
                font-size: 12px;
            }
        }
    }
    
`