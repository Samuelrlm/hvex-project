import styled from "styled-components";

export const ContainerBarMobile = styled.div`
display: none;
@media (max-width: 820px) {
    width: 100%;
    position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  #wpp{
    margin-left: 1rem;
    width: 40%;
  }
  #btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
}
    
`