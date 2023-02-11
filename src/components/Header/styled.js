import styled from "styled-components";

export const Container = styled.header`
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 align-items: center;
 flex-wrap: wrap;
 position: relative;
`


export const Content = styled.div`
 
 div{
    width: 490px;
    display: inline-block;
    margin-top: 5rem;

    img{
        width: 300px;
    }

    h1{
        width: 100%;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    p{
        font-size: 1.5rem;
        color: var(--laranja);
        margin-bottom: 2rem;
    }

    button{
        background: var(--laranja);
        border: none;
        width: 100%;
        height: 60px;
        font-size: 1.5rem;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 0 50px var(--laranja);
        animation: botao-luz 500ms infinite alternate;

        &:hover{
            filter: brightness(0.9);
        }
    }
    
    @keyframes botao-luz {
        0%{
            box-shadow: 0 0 40px var(--laranja);
        }
        100%{
            box-shadow: 0 0 60px var(--laranja);
        }
    }
 }
`

export const ArtElmadrigal = styled.div`

    margin: 1rem;

    img{
        display: inline-block;
        width: 850px;
        position: absolute;
        top: -3.5rem;
        right: -8.5rem;
        z-index: -1;
    }

    div{
        border: 2px solid var(--laranja);
        height: 104px;
        position: absolute;
        top: 130%;
        left: 50%;
        transform: translate(-50,-50);
    }

`