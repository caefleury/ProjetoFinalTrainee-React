import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:100px;
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 7.313rem;
    color:#2690FD;
    text-align: center;
}
.members__container{
    margin:0 80px;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
}
`