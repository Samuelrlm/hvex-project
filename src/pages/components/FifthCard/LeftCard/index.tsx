import BarraDivisora from "../../objetos/BarraDivisora";
import { Titulo32 } from "../../objetos/titulo32";
import { ContainerLeftFifth } from "./styles";
import Topicos from "./Topicos";

export default function LeftContainerCard(){
    return(
        <ContainerLeftFifth>
            <Titulo32 style={{width: '75%', color:'#1C2C44', }}>
                Desenvolvido para melhorar a performance dos ativos de distribuição
            </Titulo32>
            <div>
                <BarraDivisora/>
            </div>
            <Topicos/>
        </ContainerLeftFifth>
    )
}