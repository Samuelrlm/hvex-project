import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import { ContainerFirst } from "../background/ContainerBlue";

export default function FristCard(){
    return(
        <ContainerFirst>
            <LeftCard/>
            <RightCard/>
        </ContainerFirst>
    )
}