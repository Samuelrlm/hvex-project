import { useState } from "react";
import { FaBars } from "react-icons/fa";
import ButtonTopMenu from "./Button";
import LogoMenu from "./Logo/Index";
import OptionsMenu from "./Options";
import { Sidebar } from "./SideBar";
import { ContainerMenu} from "./styles";

export default function TopMenu(){
    const [sidebar, setSidebar] =useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <ContainerMenu>
            <div className="filtro" id="filtro">
                <FaBars id="btn-side" onClick={showSidebar}/>
                {sidebar && <Sidebar active={setSidebar}/>}
            </div>
            <LogoMenu/>
            <OptionsMenu/>
            <ButtonTopMenu/>
        </ContainerMenu>
    )
}