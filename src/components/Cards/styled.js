import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div:last-child{
        border: 2px solid var(--laranja);
        height: 104px;
        position: absolute;
        top: 63%;
        left: 50%;
        transform: translate(-50,-50);
    }
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
    transition: 0.5s;
    cursor: pointer;

    


   div:first-child {
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


    &:hover{
        box-shadow: 0 0 50px var(--laranja);
    }


   div:first-child {
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

`