import DetalhesRight from "./Detalhes";
import { ContainerTextInfo } from "./styles";
import Titulo from "./Titulo";
import Topicos from "./Topicos";

export default function TextInfo() {
    return (
        <ContainerTextInfo>
            <Titulo/>
            <DetalhesRight/>
            <Topicos/>
        </ContainerTextInfo>
    )
}