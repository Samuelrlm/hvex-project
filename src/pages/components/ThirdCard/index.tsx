import LeftThirdCard from "./LeftCard";
import RightThirdCard from "./RightCard";
import { ContainerThirdCard } from "./styles";

export default function ThirdCard() {
    return (
        <ContainerThirdCard>
            <LeftThirdCard/>
            <RightThirdCard/>
        </ContainerThirdCard>
    )
}