import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { LabelModel } from "../../objetos/label";
import { Btns, Container, Content } from "./styles"

export const Sidebar = ({ active }) => {
    const closeSidebar = () =>{
        active(false)
    }
    return(
        <Container>
            <div id="titulo" className="titulo">
                <FaTimes onClick={closeSidebar}/>
                <h4>SETORES:</h4>
            </div>
            <Content>
                <div className="setores">
                    <LabelModel>
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