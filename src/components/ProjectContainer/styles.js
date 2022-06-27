import styled from "styled-components";
export const Container = styled.div`s
    display: flex;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100px;
    justify-content: space-between;
    color: #8d8fa1;
    
    }
    button {
        display: ${(props)=>props.user? "flex" : "none"}

    }
`