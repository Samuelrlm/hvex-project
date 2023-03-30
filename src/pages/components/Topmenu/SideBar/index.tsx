import {FaTimes} from "react-icons/fa"
import { LabelModel } from "../../objetos/label";
import { Container, Content } from "./styles"

export const Sidebar = ({ active }) => {
    const closeSidebar = () =>{
        active(false)
    }
    return(
        <Container>
            <div id="titulo" className="titulo">
                <FaTimes onClick={closeSidebar} />
                <h4>Produtos:</h4>
            </div>
            <Content>
                <div className="opcoes" id="opcoes">
                    <LabelModel style={{color: '#00B6DE'}}>
                        Omni trafo
                    </LabelModel>
                    <LabelModel>
                        Sinalizador de faltas
                    </LabelModel>
                    <LabelModel>
                        Acoplador DP
                    </LabelModel>
                </div>
            </Content>                    
        </Container>
    )
}