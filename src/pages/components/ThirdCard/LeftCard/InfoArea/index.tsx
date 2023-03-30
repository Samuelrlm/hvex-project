import { Titulo32 } from "../../../objetos/titulo32";
import LeftComentario from "./Comentario";
import LefDetalhesCard from "./Detalhes";
import { ContainerInfoArea } from "./styles";

export default function InfoArea() {
    const largura = window.innerWidth;
    let topo = '6rem';
    if(largura <= 820){
        topo = '2rem';
    }
    return (
        <ContainerInfoArea>
            <Titulo32 style={{color: '#fff', marginTop: topo}}>OMNI TRAFO</Titulo32>
            <LefDetalhesCard/>
            <LeftComentario/>
        </ContainerInfoArea>
    )
}