import ButtonTopMenu from "./Button";
import LogoMenu from "./Logo/Index";
import OptionsMenu from "./Options";
import { ContainerMenu, LeftArea, RightArea } from "./styles";

export default function TopMenu(){
    return(
        <ContainerMenu>
            <LogoMenu/>
            <OptionsMenu/>
            <ButtonTopMenu/>
        </ContainerMenu>
    )
}