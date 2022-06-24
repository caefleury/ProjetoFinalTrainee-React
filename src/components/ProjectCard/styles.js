import styled from "styled-components";

export const Container = styled.div`
height:1300px;
color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:300px;
.project__container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:300px;
}
.project__content{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:200px;
}
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    color:#54BBFE;
}
.description{
    max-width:800px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    margin:0;
}
.text__container{
    display:flex;
    flex-direction:column;
    margin-left:40px;
}
.project__photo{
    height:400px;
    max-width:auto;
    margin-right:30px;
}
.projectmembers__container{
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    margin-bottom:300px;
}
.members__title{
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    color:#54BBFE;
    text-align: center;
    margin-top:80px;
}
@media screen and (max-width: 1200px){
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        color:#54BBFE;
    }
    .description{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin:0;
    }
}
`