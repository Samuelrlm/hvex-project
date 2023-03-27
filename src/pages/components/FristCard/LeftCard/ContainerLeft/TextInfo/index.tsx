import { ButtonInfo } from "../../../../buttons/ButtonInfo";
import { Info, TextArea, Titulo } from "./styles";

export default function TextInfo(){
    return(
        <TextArea>
            <Titulo>
                <h1>
                    Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente
                </h1>
            </Titulo>
            <Info>
                <p>
                    Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: 
                    tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, 
                    prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.
                </p>
            </Info>
        </TextArea>
    )
}