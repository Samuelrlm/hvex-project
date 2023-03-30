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
    const largura = window.innerWidth;
    let gap = '';
    let width = '600px';
    let left = '2.5rem';
    if(largura <= 820){
        gap = '1rem';
        width = '100%';
        left = '5px';
    }
    return(
        <ContainerTopicos style={{gap: gap}}>
            {Topicos.map((info) =>{
                return(
                    <Infos style={{width: width}}>
                        <img src={info.image} alt="selo verificado" />
                        <p style={{marginLeft: left}}>{info.text}</p>
                    </Infos>
                )
            })}
        </ContainerTopicos>
    )
}