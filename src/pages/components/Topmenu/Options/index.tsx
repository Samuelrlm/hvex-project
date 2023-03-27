import { LabelModel } from "../../objetos/label";
import { ContainerOptions } from "./styles";

export default function OptionsMenu(){
    return(
        <ContainerOptions>
            <LabelModel style={{color: '#00B6DE'}}>
                Omni trafo
            </LabelModel>
            <LabelModel>
                Sinalizador de faltas
            </LabelModel>
            <LabelModel>
                Acoplador DP
            </LabelModel>
        </ContainerOptions>
    )
}