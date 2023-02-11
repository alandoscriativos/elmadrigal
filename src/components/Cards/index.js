import {CardBox, Container} from "./styled"
import linhaTopElmagrigal from "../../assets/LinhaMadrigal.svg"
import iconBola from "../../assets/bola.svg"
import iconMoney from "../../assets/money.svg"
import iconHappy from "../../assets/happy.svg"

export default function Cards(){
    return (
        <Container>
            <CardBox>
                <div>
                    <img src={linhaTopElmagrigal} alt="card"/>
                    <img src={iconBola} alt="iconBola"/>
                </div>
                <strong>Módulo</strong>
                <h1>Investimento Esportivo</h1>
            </CardBox>
            <CardBox>
                <div>
                    <img src={linhaTopElmagrigal} alt="card"/>
                    <img src={iconMoney} alt="iconMoneyt"/>
                </div>
                <strong>Módulo</strong>
                <h1> Encontra valor no mercado</h1>
            </CardBox>
            <CardBox>
                <div>
                    <img src={linhaTopElmagrigal} alt="card"/>
                    <img src={iconHappy } alt="iconHappy"/>
                </div>
                <strong>Módulo</strong>
                <h1>Controle Emocional</h1>
            </CardBox>
            <div></div>
        </Container>
    )
}