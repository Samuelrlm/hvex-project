import FristCard from "../components/FristCard";
import SecondCard from "../components/SecondCard";
import TopMenu from "../components/Topmenu";
import { ContainerMain } from "./styles";

export default function MainPage(){
    return(
        <ContainerMain>
            <TopMenu/>
            <FristCard/>
            <SecondCard/>
        </ContainerMain>
    )
}