import styled from "styled-components";

export const Container = styled.div`
font-family: 'Nunito', sans-serif;
height: 54.5rem;
display:flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
color: white;
padding-top:100px;

.title__container{
    padding: 0px;
    margin: 0;
}
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 68px;
    line-height: 100px;
    margin: 0px;
    padding: 0px;
}
.blue__braces{
    font-style: normal;
    font-weight: 600;
    font-size: 5rem;
    line-height: 7.313rem;
    color:#2690FD;
}
.subtitle{
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 10px;
    margin: 0px;
    padding: 0px;
    margin-left:10px
}
.services__container {
    position:relative;
    display: grid;
    grid-template-columns: repeat(2, 450px [col-start]);
    grid-template-rows: repeat(2, 250px [row-start]);
    grid-column-gap: 245px;
    grid-row-gap: 120px;  
}
    
#title__container { grid-area: 1 / 1 / 2 / 2; }
#websites__container{ grid-area: 1 / 2 / 2 / 3; }
#apps_container { grid-area: 2 / 1 / 3 / 2; }
#sistems__container { grid-area: 2 / 2 / 3 / 3; }

.rectangle{
    position: absolute;
    width: 450px;
    height: 225px;
    border: 1px solid #F3F1EF;
    border-radius: 20px;
    filter: drop-shadow(-4px 4px 6px rgba(243, 241, 239, 0.63));
}
.text__content{
    max-width:180px;
    margin-left:25px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #54BBFE;
}
h2{
    margin-left:20px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    margin-bottom:0;
}

.text__container{
    display:flex;
    flex-direction:column;
}
#app_content > .text__content{
    max-width:180px;
    text-align:right;
    margin-top:55px;
    
}
#app__title{
    text-align:right;
}

.service_container{
    display:flex;
    justify-content:flex-start;
    width: 600px;
    height: 340px;
}
img{
    height:250px;
    width:auto;
}
#garotopc__img{
    z-index:1;
    transform: scaleX(-1);
    align-self:flex-start;
    margin-right:50px;
    margin-bottom:50px

}
#garotabalanco__img{
    margin-right:30px
}
#garotabike__img{
    margin-right:20px;
    height:260px;
    width:auto;
}
.orange{
    color:#fd8d4b;
}
@media screen and (max-width: 1200px){
    height: 55.5rem;
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        line-height: 100px;
        margin: 0px;
        padding: 0px;
    }
    .subtitle{
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 10px;
        margin: 0px;
        padding: 0px;
        margin-left:10px
    }
    .services__container {
        position:relative;
        display: grid;
        grid-template-columns: repeat(2, 431px [col-start]);
        grid-template-rows: repeat(2, 250px [row-start]);
        grid-column-gap: 200px;
        grid-row-gap: 100px;  
    }
    .service_container{
        display:flex;
        justify-content:flex-start;
        width: 300px;
        height: 340px;
    }
    .rectangle{
        position: absolute;
        width: 420px;
        height: 240px;
        border: 1px solid #F3F1EF;
        border-radius: 20px;
        filter: drop-shadow(-4px 4px 6px rgba(243, 241, 239, 0.63));
    }
    img{
        height:200px;
        width:auto;
    }
}
`