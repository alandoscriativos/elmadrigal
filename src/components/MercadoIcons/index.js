import { Container, Content } from "./styled"
import iconGol from "../../assets/bola.svg"
import iconEscanteio from  "../../assets/escanteio.svg"
import iconNumber1 from "../../assets/Numero-01.svg"
import iconNumber2 from "../../assets/Numero-02.svg"

export default function MercadoIcons(){
    return (
        <Container>
                 <h1>Principais Mercados</h1>
            <Content>
                    <div>
                        <img src={iconGol}/>
                    </div>    
                    <div>
                            <img src={iconNumber1}/>
                            <p>Gols</p>
                    </div>

                    <div>
                        <img src={iconEscanteio}/>
                    </div>    
                    <div>
                            <img src={iconNumber2}/>
                            <p>Gols</p>
                    </div>
            </Content>
        </Container>
    )
}