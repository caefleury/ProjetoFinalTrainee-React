import styled from "styled-components";


export const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    background: rgb(5,0,20);
    color: white;
    margin: 0;
    width: 100%;
    position: fixed;
    top: 0;
    z-index:1
    .logo{
        height: 42px;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color:white;
    }
    .navbar__container{
        width: 100%;
        padding: 0 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        height: 50px;
    }
    .navbar__menu {
        display: flex;
        justify-content: space-around;
        font-weight: 300;
        width: 30%;
    }
    .navbar__item {
        list-style-type: none;
    }
    .navbar__btn__container{
        margin: 0;
        padding: 2px 15px;
        background-color: white;
        display: flex;
        justify-content: space-;
        align-items: center;
        border-radius: 20px;
    }
    #navbar__btn{
        color: #111827;
    }
    .arrow__img{
        height: auto;
        width: 26px;
        margin-left:5px
    }
`
