import { LabelModel } from "../../../objetos/label";
import { LinhaDivisoria } from "../../../PerguntasCard/CardsQuestions/styles";
import { ContainerFooterPart, ContainerInfos } from "./styles";

export default function Footer(){
    return(
        <ContainerFooterPart>
            <LinhaDivisoria style={{color: '#fffff'}} />
            <ContainerInfos>
                <div className="registro" style={{width: '65%'}}>
                    <LabelModel>HVEX © 2021 | Todos os direitos reservados.</LabelModel>
                </div>
                <div className="politicas" style={{width: '17.5%'}}>
                    <LabelModel>Políticas de Privacidade</LabelModel>
                </div>
                <div className="termos" style={{width: '17.5%', textAlign: 'end'}}>
                    <LabelModel>Termos de Uso</LabelModel>
                </div>
            </ContainerInfos>
        </ContainerFooterPart> 
    )
}