import LeftComentario from "./Comentario";
import LefDetalhesCard from "./Detalhes";
import { ContainerInfoArea } from "./styles";
import LeftTituloThird from "./Titulo";

export default function InfoArea() {
    return (
        <ContainerInfoArea>
            <LeftTituloThird/>
            <LefDetalhesCard/>
            <LeftComentario/>
        </ContainerInfoArea>
    )
}