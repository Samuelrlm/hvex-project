import ComponenteDivisor from "../components/ComponenteDivisor";
import FifthCard from "../components/FifthCard";
import FoorterCard from "../components/FooterCard";
import FourthCard from "../components/FourthCard";
import FristCard from "../components/FristCard";
import BarraMobile from "../components/objetos/BarraMobile";
import Questions from "../components/PerguntasCard";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import TopMenu from "../components/Topmenu";
import { ContainerMain } from "./styles";

export default function MainPage(){
    return(
        <ContainerMain>
            <TopMenu/>
            <FristCard/>
            <SecondCard/>
            <ThirdCard/>
            <FourthCard/>
            <FifthCard/>
            <ComponenteDivisor/>
            <Questions/>
            <FoorterCard/>
            <BarraMobile/>
        </ContainerMain>
    )
}