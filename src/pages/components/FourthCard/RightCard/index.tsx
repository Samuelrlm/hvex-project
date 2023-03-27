import BarraDivisora from "../../objetos/BarraDivisora";
import { Titulo32 } from "../../objetos/titulo32";
import Icones from "./Icones";
import { ContainerRightFourthCard } from "./styles";
import TextPlaceFourthCard from "./TextPlace";

export default function RightFourthCard() {
    return(
        <ContainerRightFourthCard>
            <Titulo32 style={{color: '#1B2033', marginBottom:'2rem'}}>OMNI TRFAFO</Titulo32>
            <BarraDivisora/>
            <Titulo32 style={{color: '#1C2C44', marginTop:'2rem', width:'70%'}}>Monitoramento inteligente de transformadores de distribuição</Titulo32>
            <TextPlaceFourthCard/>
            <Icones/>
        </ContainerRightFourthCard>
    )
}