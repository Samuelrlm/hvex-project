import Redes from "./Redes";
import { ContainerTopFooter } from "./styles";

export default function Top(){
    return(
        <ContainerTopFooter>
            <div className="card" id="card">
                <div className="logo" id="logo">
                    <img src="src/images/logos/hvex.png" alt="Logo" />
                </div>
                <div className="endereco" id="endereco">
                    <h3>Endereço</h3>
                    <p>R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG, 37502-508</p>
                </div>
                <div className="contato" id="contato">
                    <h3>Contato</h3>
                    <p>(35) 3622-2699</p>
                    <p>contato@hvex.com.br</p>
                </div>
                <Redes/>
            </div>
        </ContainerTopFooter>
    )
}