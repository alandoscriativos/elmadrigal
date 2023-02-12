import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin: 14rem auto;
    padding: 0;

    h1{
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        color: var(--laranja);
        text-transform: uppercase;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin: 3rem auto;    

    div:first-child {
        img{
            display: inline-block;
            width: 52px;
        }
    }
`