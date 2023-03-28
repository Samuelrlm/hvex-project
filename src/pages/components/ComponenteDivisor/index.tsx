import { ButtonMenu } from "../buttons/ButtonMenu";
import ButtonInfoFrist from "../FristCard/LeftCard/ContainerLeft/Button";
import BarraDivisora from "../objetos/BarraDivisora";
import { Titulo32 } from "../objetos/titulo32";
import Titulo from "../SecondCard/RightCard/TextInfo/Titulo";
import { ContainerComponenteDivisor, ContainerPrincipalDivisor } from "./styles";

export default function ComponenteDivisor() {
    return(
        <ContainerComponenteDivisor>
            <ContainerPrincipalDivisor>
                <Titulo32>
                    Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?
                </Titulo32>
                <BarraDivisora/>
                <ButtonMenu>
                    Falar com um consultor
                </ButtonMenu>
            </ContainerPrincipalDivisor>
        </ContainerComponenteDivisor>
    )
}