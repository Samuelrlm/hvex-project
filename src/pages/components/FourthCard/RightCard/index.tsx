import BarraDivisora from "../../objetos/BarraDivisora";
import { Titulo32 } from "../../objetos/titulo32";
import { ContainerRightFourthCard } from "./styles";

export default function RightFourthCard() {
    return(
        <ContainerRightFourthCard>
            <Titulo32 style={{color: '#1B2033', marginBottom:'2rem'}}>OMNI TRFAFO</Titulo32>
            <BarraDivisora/>
        </ContainerRightFourthCard>
    )
}