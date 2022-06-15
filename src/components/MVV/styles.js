import styled from "styled-components";

export const Container = styled.div`{
height:1000px;
color:white;
font-family: 'Nunito', sans-serif;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-style: normal;
.bru{
    color:#2690FD;
}
h1{
    font-weight: 600;
    font-size: 48px;
    line-height: 50px;
}
li{
    list-style-type: none;
    line-height: 76px;
    font-size: 26px;
}
.text__content{
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.5rem;
    width: 26.375rem;
}
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 7.313rem;
    color:#2690FD;
    text-align: center;
}
.mvv__container {
    display: grid;
    justify-content:center;
    align-items:center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 180px;
    grid-row-gap: 60px;
}
    
.missao__container { grid-area: 1 / 1 / 2 / 2; }
.visao__container { grid-area: 2 / 1 / 3 / 2; }
.valores__container { grid-area: 1 / 2 / 3 / 3; }
`