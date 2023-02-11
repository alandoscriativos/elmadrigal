import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const CardBox = styled.section`
    display: inline-block;
    background: var(--cinza);
    border-radius: 0.55rem;
    width: 287px;
    height: 200px;
    border: 1px solid var(--laranja);
    padding: 1rem;
    margin: 1rem;

  div{
    display: flex;
    justify-content: space-between;
    width: 100%;

    img:first-child{
        width: 150px;
    }
    img:last-child{
        width: 40px;
    }
  }
   
   strong{
    margin-top: 0.5rem;
    width: 120px;
    font-size: 1.5rem;
    text-align: center;
    display: block;
    background: var(--laranja);
   } 

   h1{
    margin-top: 0.5rem;
    font-size: 1.2rem;
   }

`