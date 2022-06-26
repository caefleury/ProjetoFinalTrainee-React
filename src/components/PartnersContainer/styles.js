import styled from "styled-components";

export const Container = styled.div`
height:840px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
color:white;
.title__container{
    margin-bottom:60px;
}
.partners__container{
    width:1150px;
    margin: 0px 20px;
}
.partners__content{
    background: rgba(24, 25, 43, 0.58);
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    display:flex;
    margin-top:40px;
    justify-content:space-evenly;
    flex-wrap:wrap;
    width:100%;
}
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 100px;
    margin: 0px;
    padding: 0px;
}
.blue__braces{
    font-style: normal;
    font-weight: 600;
    font-size: 5.5rem;
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

.button-box{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
}
.butão{
    width: 4.5rem;
    
}
`
