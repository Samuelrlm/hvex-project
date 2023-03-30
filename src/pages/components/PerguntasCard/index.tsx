import { Titulo32 } from "../objetos/titulo32";
import CardsQuestions from "./CardsQuestions";
import { ContainerQuestion } from "./styles";

export default function Questions(){
    const largura = window.innerWidth;
    let topo = '5rem';
    if(largura <= 820){
        topo = '2rem';
    }
    return(
        <ContainerQuestion>
            <Titulo32 style={{marginTop: topo, color: '#1C2C44'}}>
                Perguntas Frequentes
            </Titulo32>
            <CardsQuestions/>
        </ContainerQuestion>
    )
}