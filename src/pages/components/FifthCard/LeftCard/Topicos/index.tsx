import { ContainerTopicos, Infos } from "../../../SecondCard/RightCard/TextInfo/Topicos/styles";

export default function Topicos(){
    //Aqui vou reaproveitar o componente de topicos que está no segundo card
    const Topicos = [
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Balanço energético'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Auto-diagnóstico dos transformadores'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Medidor ideal para consumidores comerciais, industriais'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'À prova de fraude'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Melhoria dos Indicadores de Continuidade'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Maior vida útil do ativo'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Medição de temperatura interna'},
        {image: 'src/images/Icons/verificadoAzulEscuro.png', text: 'Acompanhamento em tempo real das condições do equipamento'},

    ]
    return(
        <ContainerTopicos>
            {Topicos.map((info) =>{
                return(
                    <Infos style={{width:'600px'}}>
                        <img src={info.image} alt="selo verificado" />
                        <p style={{marginLeft:'2.5rem'}}>{info.text}</p>
                    </Infos>
                )
            })}
        </ContainerTopicos>
    )
}