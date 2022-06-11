import styled from "styled-components";
import sky from '../../assets/sky.png'

export const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    height: 210.875rem;
    margin: 0;
    padding: 0;
    }
    .home__container{
        background-image: url(${sky});
        background-size: cover;
        height: 1000px;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
    }
    .text__container{
        margin-top:100px;
    }
    .title__foguetinho{
        position:relative;
    }
    #foguetinho__img{
        height: auto;
        width: 300px;
        position: absolute;
        left: 78.15%;
        top: 60.99%;
    }
    .subtitle{
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 41px;
        width: 676px;
        height: 87px;
        position: absolute;
        margin:0;
        margin-left: 4rem;
        
    }
    .title{
        position: relative;
        font-weight: 400;
        font-size: 400px;
        background: linear-gradient(180deg, #2DA2FF 0%, rgba(45, 162, 255, 0.388666) 60.57%, rgba(45, 162, 255, 0) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        padding: 0;
    }
    @media screen and (max-width: 800px){
        .title{
            position: relative;
            font-weight: 400;
            font-size: 200px;
            background: linear-gradient(180deg, #2DA2FF 0%, rgba(45, 162, 255, 0.388666) 60.57%, rgba(45, 162, 255, 0) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
            padding: 0;
        }
        #foguetinho__img{
            height: auto;
            width: 150px;
            position: absolute;
            left: 78.15%;
            top: 60.99%;
        }
        .subtitle{
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 41px;
            width: 450px;
            height: 87px;
            position: absolute;
            margin:0;
            margin-left: 4rem;
            
        }
    }
`
