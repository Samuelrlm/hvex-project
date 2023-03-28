import { useEffect, useState } from "react"
import { comentarios } from "../../../../mocks/comantariosDb"
import { AreaButton, CardQuestion, ContainerMainQuestions, LinhaDivisoria, TituloCard } from "./styles";

interface comentarios{
    userId: number;
    pergunta: string;
    resposta: string;
}

export default function CardsQuestions(){
    const [showRes, setShowRes] = useState(false)
    const switchRes = () =>{
        setShowRes(!showRes);
    }
    const [perguntas, setPerguntas] = useState<comentarios[]>([])
        useEffect(() =>{
            setPerguntas(comentarios)
        }, [])
        
    return(
        <ContainerMainQuestions>
            {comentarios.map((res) =>{
                return(
                    <CardQuestion key={res.userId}>
                        <TituloCard>
                            <h3>{res.pergunta}</h3>
                            <LinhaDivisoria/>
                            <p>{res.resposta}</p>
                        </TituloCard>
                        <AreaButton>
                            <span onClick={switchRes}>
                                <img src="src/images/Icons/setaButton.png" alt="expandir" />
                            </span>
                        </AreaButton>
                    </CardQuestion>
                )
            })}
        </ContainerMainQuestions>
    )
}