import { Titulo32 } from "../../../objetos/titulo32";
import LeftComentario from "./Comentario";
import LefDetalhesCard from "./Detalhes";
import { ContainerInfoArea } from "./styles";

export default function InfoArea() {
    return (
        <ContainerInfoArea>
            <Titulo32 style={{color: '#fff', marginTop: '6rem'}}>OMNI TRAFO</Titulo32>
            <LefDetalhesCard/>
            <LeftComentario/>
        </ContainerInfoArea>
    )
}