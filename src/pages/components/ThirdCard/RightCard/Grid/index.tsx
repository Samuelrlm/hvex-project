import { CardGrid, ContainerRightGrid } from "./styles";

export default function RightGrid() {
    const Cards = [
        {imagem:'src/images/Icons/wifi.png', titulo:'Sistema de Proteção'},
        {imagem:'src/images/Icons/integracao.png', titulo:'Integração de dados'},
        {imagem:'src/images/Icons/engrenagem.png', titulo:'Gestão de Ativos Elétricos'},
        {imagem:'src/images/Icons/wifi.png', titulo:'Comunicação inteligente'},
    ]
    return(
        <ContainerRightGrid>
            {Cards.map((index) =>{
                return(
                    <CardGrid>
                        <img src={index.imagem} alt="Imagem de um ícone"/>
                        <div className="text" id="text">
                            <h2>{index.titulo}</h2>
                        </div>
                    </CardGrid>
                )
            })}
        </ContainerRightGrid>
    )
}