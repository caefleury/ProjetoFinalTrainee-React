import styled from "styled-components";

export const Container = styled.div`
height:800px;
color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:160px 0 260px 0;
.project__container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
}
.text__container{
    display:flex;
    flex-direction:column;
    margin-left:40px;
}
.project__photo{
    height:auto;
    width:400px;
    margin-right:20px;
}
.projectmembers__container{
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
}
.members__title{
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    color:#54BBFE;
    text-align: center;
    margin-top:80px;
}
`