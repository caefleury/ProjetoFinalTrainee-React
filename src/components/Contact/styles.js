import styled from "styled-components";
export const Container = styled.div`{
    font-family: 'Nunito', sans-serif;
    color: white;
    display:grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 6.25rem;
    height: 1274px;
    width: 100%;;
    margin-top: 6.25rem;
    }
    .title,.subtitle{
        margin: 1rem 2rem;
    }
    .molding{
        width: 62.5rem;
        height: 62.5rem;
	    border: 1.63rem solid rgba(56, 120, 159, 1);
	    padding: 0.938rem;
	    background: transparent;
    }
    .input_name{
        max-width: 50rem;
        height: 5rem;
        width: 100%;
        background: transparent;
        border: 0.2rem solid gray;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
    }
}`