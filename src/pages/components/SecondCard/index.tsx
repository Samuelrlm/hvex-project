import LeftSecondCard from "./LeftCard";
import RightSecondCard from "./RightCard";
import { ContainerSecondCard } from "./styles";

export default function SecondCard() {
    return (
        <ContainerSecondCard>
            <LeftSecondCard/>
            <RightSecondCard/>
        </ContainerSecondCard>
    )
}