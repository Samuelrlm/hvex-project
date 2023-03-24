import { ContainerMenu, LeftArea } from "./styles";

export default function TopMenu(){
    return(
        <ContainerMenu>
            <LeftArea>
                <h3>Logo</h3>
            </LeftArea>
            <div className="right">
                <h3>Opções</h3>
            </div>
        </ContainerMenu>
    )
}