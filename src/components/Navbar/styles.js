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
        display:flex
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
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        height: 50px;

        
    }
    
    .navbar__menu {
        display: fixed;
        justify-content: space-between;
        font-weight: 300px;
        width: 50%;
        
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
    

@media (max-width: 800px) {
    body {
        overflow-x: hidden
    }
    .navbar__menu{
      position: fixed;
      margin: auto;
      top: 1px;
      //right: 0;
      left:2;
      width: 50vw;
      height: 92vh;
      background: black;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
      display: ${(props)=> props.openNav? 'flex' : 'none'};
    }

    .navbar__btn__container{
        margin-right: 200px;
    }
}


.mobile-nav {
    font-size: 24px;
    display:none;
    z-index: 10;
    cursor: pointer;
    @media (max-width:800px ){
        display:block
    }

}

`
