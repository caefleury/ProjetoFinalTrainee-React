import styled from "styled-components";
export const Container = styled.div`{
    font-family: 'Nunito', sans-serif;
    color: white;
    display:grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 6.25rem;
    height: 1274px;
    width: 100%;;
    margin-top: 6.25rem;
    }
    #avatar{
        height: auto;
        width: 26rem;
    }
    .text__container1{
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.5rem;
        width: 59.375rem;
        text-align: justify;
    }
    .sobre__container{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .title,.subtitle{
        margin: 0;
    }
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 5.375rem;
        line-height: 7.313rem;
    }
    .subtitle{
        font-style: normal;
        font-weight: 200;
        font-size: 1.5rem;
        line-height: 2.063rem;
    }
    .somos__container{
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
    }
    .text__container2{
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.5rem;
        width: 50rem;
        text-align: justify;
    }

}`