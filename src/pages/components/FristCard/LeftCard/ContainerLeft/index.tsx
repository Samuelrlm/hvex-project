import ButtonInfoFrist from "./Button";
import { ContainerLeftComponent } from "./styles";
import TextInfo from "./TextInfo";

export default function LeftContainerCard(){
    return(
        <ContainerLeftComponent>
            <TextInfo/>
            <ButtonInfoFrist/>
        </ContainerLeftComponent>
    )
}