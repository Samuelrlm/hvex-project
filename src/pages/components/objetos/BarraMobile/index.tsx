import { ButtonMenu } from "../../buttons/ButtonMenu";
import WppButton from "../../FristCard/WppButton";
import { ContainerBarMobile } from "./styles";

export default function BarraMobile() {
    return(
        <ContainerBarMobile>
            <div className="div" id="wpp">
                <WppButton/>
            </div>
            <div className="btn" id="btn">
                <ButtonMenu>
                    Comprar agora
                </ButtonMenu>
            </div>
        </ContainerBarMobile>
    )
}