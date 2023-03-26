import { ContainerTopicos, Infos } from "./styles";

export default function Topicos() {
    const topicos = [
        {image: 'src/images/Icons/verificado.png', text: 'Monitoramento inteligente de ativos'},
        {image: 'src/images/Icons/verificado.png', text: 'Melhoria dos indicadores de continuidade'},
        {image: 'src/images/Icons/verificado.png', text: 'Comunicação Modular'},
        {image: 'src/images/Icons/verificado.png', text: 'Business Inteligence'},
        {image: 'src/images/Icons/verificado.png', text: 'Redução de Perdas técnicas e Não técnicas'},
    ];

    return (
        <ContainerTopicos>
            {topicos.map((info) =>{
                return(
                    <Infos>
                        <img src={info.image} alt="selo verificado" />
                        <p>{info.text}</p>
                    </Infos>
                )
            })}
        </ContainerTopicos>
    )
}
