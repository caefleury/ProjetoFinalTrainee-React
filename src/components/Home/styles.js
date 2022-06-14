import styled from "styled-components";
import sky from '../../assets/sky.png'

export const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    height: 1000px;
    margin: 0;
    padding: 0;
    z-index:2;
    }
    .home__container{
        background-image: url(${sky});
        background-size: cover;
        height: 62.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
    }
    .text__container{
        margin-top:6.25rem;
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
        font-weight: 18.75rem;
        font-size: 1.875rem;
        line-height: 2.5rem;
        width: 42.25rem;
        height: 5.375rem;
        position: absolute;
        margin:0;
        margin-left: 4rem;
        
    }
    .title{
        position: relative;
        font-weight: 400;
        font-size: 25rem;
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
            font-size: 12.5rem;
            background: linear-gradient(180deg, #2DA2FF 0%, rgba(45, 162, 255, 0.388666) 60.57%, rgba(45, 162, 255, 0) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
            padding: 0;
        }
        #foguetinho__img{
            height: auto;
            width: 9.375rem;
            position: absolute;
            left: 78.15%;
            top: 60.99%;
        }
        .subtitle{
            font-style: normal;
            font-weight: 300;
            font-size: 1.25rem;
            line-height: 2.5rem;
            width: 28.125rem;
            height: 5.438rem;
            position: absolute;
            margin:0;
            margin-left: 4rem;
            
        }
    }
`
