import WppButton from "../../WppButton";
import ButtonInfoFrist from "./Button";
import { ContainerBtnWpp, ContainerLeftComponent} from "./styles";
import TextInfo from "./TextInfo";

export default function LeftContainerCard(){
    return(
        <ContainerLeftComponent>
            <TextInfo/>
            <ButtonInfoFrist/>
            <ContainerBtnWpp>
                <WppButton/>
            </ContainerBtnWpp>
        </ContainerLeftComponent>
    )
}