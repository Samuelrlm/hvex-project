import BarraDivisora from "../../objetos/BarraDivisora";
import { Titulo32 } from "../../objetos/titulo32";
import Icones from "./Icones";
import { ContainerRightFourthCard } from "./styles";
import TextPlaceFourthCard from "./TextPlace";

export default function RightFourthCard() {
    const largura = window.innerWidth;
    let baixo = '2rem';
    if(largura <= 820){
        baixo = '1rem';
    }
    return(
        <ContainerRightFourthCard>
            <Titulo32 style={{color: '#1B2033', marginBottom:baixo}}>OMNI TRFAFO</Titulo32>
            <BarraDivisora/>
            <div className="comentario" id="comentario">
                <h2>Monitoramento inteligente de transformadores de distribuição</h2>
            </div>
            <TextPlaceFourthCard/>
            <Icones/>
        </ContainerRightFourthCard>
    )
}