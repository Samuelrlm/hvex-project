import { BackgroundGray } from "../background/ContainerGray";
import { Titulo32 } from "../objetos/titulo32";
import LeftFifthCard from "./LeftCard";
import RightFifthCard from "./RightCard";

export default function FifthCard(){
    return(
        <BackgroundGray>
            <LeftFifthCard/>
            <RightFifthCard/>
        </BackgroundGray>
    )
}