import styled from "styled-components";

export const Section = styled.div`
`

export const Container = styled.section`

    max-width: 100%;
    margin: 18rem auto;
    position: relative;

    div:first-child{
        display: block;
        margin: 0 auto;
        width: 500px;
        text-align: center;

        h1{
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--laranja);
        }

        p{
            font-size: 1.3rem;
        }
    }

`
