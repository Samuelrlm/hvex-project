import BarraDivisora from "../../objetos/BarraDivisora";
import { ContainerLeftFifth } from "./styles";
import Topicos from "./Topicos";

export default function LeftContainerCard(){
    const largura = window.innerWidth;
    let topo = '2rem';
    if(largura <= 820){
        topo = '1rem';
    }
    return(
        <ContainerLeftFifth>
            <div className="titulo" id="titulo">
                <h2>
                    Desenvolvido para melhorar a performance dos ativos de distribuição
                </h2>
            </div>
            <div style={{marginTop: topo}}>
                <BarraDivisora/>
            </div>
            <div className="imagem" id="imagem">
                <img src="src/images/podutos/Omni_tranformer 1.png" alt="Imagem de um ícone"/>
            </div>
            <Topicos/>
        </ContainerLeftFifth>
    )
}