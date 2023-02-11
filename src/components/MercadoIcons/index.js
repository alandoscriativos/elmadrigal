import { Container, Content } from "./styled"
import iconGol from "../../assets/bola.svg"

export default function MercadoIcons(){
    return (
        <Container>
            <Content>
                <h1>Principais Mercados</h1>
                <div>
                    <img src={iconGol}/>
                    <div>
                        <p>Gols</p>
                    </div>
                </div>
            </Content>
        </Container>
    )
}