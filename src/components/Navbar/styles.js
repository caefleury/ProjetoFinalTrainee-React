import styled from "styled-components";


export const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    color: white;
    width:100%;
    position: fixed;
    top: 0;
    z-index:2;
    backdrop-filter: blur(4px);
    .cta{
        display:flex;
    }
    .logo{
        height: 42px;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
    }
    ul {
        list-style-type: none;
        overflow:hidden;
    }
    ul li::before{
        content:"";
        position:absolute;
        height:2px;
        width:100px;
        background: white;
        transform: translateX(110px);
        bottom:10px;
        opacity:0;
        transition:all 0.3s cubic-bezier(.55,0,.1,1);
    }
    ul li:hover::before{
        transform: translateX(0px);
        opacity:1;
        width:20px;
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
        align-items: center;
        border-radius: 20px;
    }
    #navbar__btn{
        color: #111827;
        font-weight:600;
        font-size:18px;
    }
    .arrow__img{
        height: auto;
        width: 26px;
        margin-left:5px
    }
`
