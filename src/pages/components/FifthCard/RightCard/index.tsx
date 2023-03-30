import { RightContainerSecond } from "../../SecondCard/RightCard/styles";
import { Container } from "../../Topmenu/SideBar/styles";
import { ContainerRightCard } from "./styles";

//Aqui vou reaproveitar o componente do lado direito do segundo card
export default function RightFifthCard(){
    const largura = window.innerWidth;
    let display = 'flex';
    if(largura <= 820){
        display = 'none';
    }
    return(
        <ContainerRightCard>
            <img style={{marginTop:'3rem'}} src="src/images/podutos/Omni_tranformer.png" alt="transformador" />
        </ContainerRightCard>
    )
}