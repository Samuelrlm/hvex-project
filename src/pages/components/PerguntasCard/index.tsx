import { Titulo32 } from "../objetos/titulo32";
import CardsQuestions from "./CardsQuestions";
import { ContainerQuestion } from "./styles";

export default function Questions(){
    return(
        <ContainerQuestion>
            <Titulo32 style={{marginTop: '5rem', color: '#1C2C44'}}>
                Perguntas Frequentes
            </Titulo32>
            <CardsQuestions/>
        </ContainerQuestion>
    )
}