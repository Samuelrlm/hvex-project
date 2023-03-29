import { Link } from "react-router-dom";
import { CardRedes, ContainerRedes } from "./styles";

export default function Redes(){
    const redes = [
        {logo: 'src/images/logos/linkedin.png', link:'https://www.linkedin.com/mwlite/company/hvexoficial', id: 'lk'},
        {logo: 'src/images/logos/facebook.png', link:'https://www.facebook.com/HVEX.MG',id: 'fb'},
        {logo: 'src/images/logos/insta.png', link:'https://instagram.com/hvex_oficial?igshid=YmMyMTA2M2Y=',id: 'it'},
        {logo: 'src/images/logos/youtube.png', link:'https://youtube.com/@hvex', id: 'yt' }
    ]
    return(
        <ContainerRedes>
            <h3>Confira nossa redes</h3>
            <CardRedes>
                {redes.map((item) =>{
                    return(
                        <Link to={item.link} target="_blank" >
                            <div className="circle" id="Circle">
                                <img id={`${item.id}`} src={`${item.logo}`} alt="icon" />
                            </div>
                        </Link>
                    )
                })}
            </CardRedes>
        </ContainerRedes>
    )
}