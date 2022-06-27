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
        font-weight: 300;
    }
    .molding{
        width: 50vw;
	    border: 1rem solid #38789F;
	    padding: 0.938rem;
	    background: transparent;
    }
    .input_name{
        max-width: 50rem;
        height: 3rem;
        width: 100%;
        background: transparent;
        border: 0.2rem solid gray;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
    }
    .servicesbox__container{
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
    }
    .budgets__container{
        flex-wrap:wrap;
    }
    .budgetbox__container{
        margin:4px;
    }
    .arrow__img{
        height: auto;
        width: 24px;
        margin-left:5px
    }
    .navbar__btn__container{
        margin: 0;
        padding: 2px 15px;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 20px;
        width:120px;
        margin:20px;
        cursor: pointer;
    }
    #navbar__btn{
        color: #111827;
        font-weight:600;
        font-size:18px;
       
    }
}`