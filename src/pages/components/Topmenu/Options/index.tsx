import { LabelModel } from "../../objetos/label";
import { ContainerOptions } from "./styles";

export default function OptionsMenu(){
    return(
        <ContainerOptions>
            <LabelModel id="select">
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