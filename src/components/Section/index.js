import Cards from '../Cards'
import {Container} from './styled'

export  default function Section(){
    return (
        <Container>
            <div>
                <h1>CURSO COMPLETO</h1>
                <p>Minha missão: Te passar
                o máximo possível de conhecimento 
                sobre Investimento esportivo. Ao concluir 
                este curso você terá um entendimento
                e um conhecimento amplo de todos 
                os conceitos sobre o Investimento esportivo.
                </p>
            </div>
            <Cards/>
        </Container>
    )
}