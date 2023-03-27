import { CardIcones, CircleIcoes, ContainerIcones } from "./styles";

export default function Icones() {
    const Icons = [
        {texto: 'Monitoramento de  tensão, corrente e carga', icone:'src/images/Icons/velocimetro.png'},
        {texto: 'Análise de perda de vida útil do transformador', icone:'src/images/Icons/decaida.png'},
        {texto: 'Medição do balanço energéticode Perdas', icone:'src/images/Icons/cimaBaixo.png'},
        {texto: 'Detecção de faltas na rede elétrica', icone:'src/images/Icons/semEnergia.png'}, //esse texto não consta no prototipo, portanto deduzi que seria isso pela imagem
        {texto: 'Análise de Fator de potência', icone:'src/images/Icons/Analise.png'},
        {texto: 'Harmônicas de corrente e tensão', icone:'src/images/Icons/Corrente.png'},
        {texto: 'Medição de temperatura interna', icone:'src/images/Icons/thermometer.png'},
        {texto: 'Supervisão de  baixa tensão ', icone:'src/images/Icons/Supervisor.png'},
        
    ]
    return(
        <ContainerIcones>
            {Icons.map((info) =>{
                return(
                    <CardIcones>
                        <CircleIcoes>
                            <img src={info.icone} alt="icone"/>
                        </CircleIcoes>
                        <p>{info.texto}</p>
                    </CardIcones>
                )
            })}
        </ContainerIcones>
    )
}