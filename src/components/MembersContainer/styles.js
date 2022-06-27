import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:80px;
.title{
    font-style: normal;
    font-weight: 600;
    font-size: 3.2rem;
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

@media screen and (max-width: 800px){
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 2.8rem;
        line-height: 7.313rem;
        color:#2690FD;
        text-align: center;
    }
    .member
}
.BotaoMembroFoto {
    display: ${(props)=> props.user? 'flex' : 'none'};
}
.BotaoMembroCreate {
    display: ${(props)=> props.user? 'flex' : 'none'};
}
.BotaoMembroUpdate {
    display: ${(props)=> props.user? 'flex' : 'none'};
}
.BotaoMembroDelete {
    display: ${(props)=> props.user? 'flex' : 'none'};
}
`