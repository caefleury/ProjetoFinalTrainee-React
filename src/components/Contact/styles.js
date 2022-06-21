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
        margin: 0;
    }
    .molding{
        width: 1000px;
        height: 1000px;
	    border:8px inset rgba(56, 120, 159, 1);
	    padding:15px;
	    background: transparent;
    }
    @media screen and (max-width: 1200px){
        .title{
            font-style: normal;
            font-weight: 400;
            font-size: 3rem;
            line-height: 7rem;
        }

        .text__container1{
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.5rem;
            width: 45rem;
            text-align: justify;
        }
        .text__container2{
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.5rem;
            width: 44rem;
            text-align: justify;
        }
    }
}`