import {Container, ArtElmadrigal,Content}from "./styled"
import linhaTopElmagrigal from "../../assets/linha-elmadrigal.png"
import artElmadrigal from "../../assets/artElmadrigal.png"

export function Header(){
    return (
        <Container>
            <Content>
                <div>
                    <img src={linhaTopElmagrigal} alt="linha-elmadrigal"/>
                    <h1>APRENDA AGORA COMO GANHAR DINHERO COM FUTEBOL</h1>
                    <p>Chega de red, viva de greens</p>
                    <button type="button" title="Comprar">COMPRAR</button>
                </div>
            </Content>
            <ArtElmadrigal>
                <img 
                className="artElmadrigal" title="Logo do Elmadrigal" 
                src={artElmadrigal} 
                alt="art-elmadrigal"/>
                <div></div>
            </ArtElmadrigal>
        </Container>
    )
}

export default Header;