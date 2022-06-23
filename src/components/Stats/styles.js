import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:800px;
.stats__container{
    display:flex;
    justify-content:center;
    align-items:center;
    width:1300px;
    padding:50px;
    background: rgba(24, 25, 43, 0.53);
    backdrop-filter: blur(4px);
    border-radius: 30px;
}
.stats__content{
    margin:80px;
}
.stats__title{
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    color: #FD8D4B;
    margin:0;
}
.stats__number{
    font-style: normal;
    font-weight: 600;
    font-size: 150px;
    margin:0;
    display: flex;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: #09071E;
}

`