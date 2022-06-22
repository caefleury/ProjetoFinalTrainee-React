import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    height:350px;
    width: 16rem;
    color:white;
    margin:20px;
    .member__name{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        text-transform: capitalize;
        margin-bottom:0;
    }
    .member__role{
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        margin-top:8px;
    }
    .member__container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .circle{
        background-color:#D9D9D9;
        height:170px;
        width:170px;
        border-radius: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        height:160px;
        width:160px;
        border-radius: 100%;
    }

`