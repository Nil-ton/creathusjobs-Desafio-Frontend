import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperMain = styled.div`

    .grid {
        width: 100%;
        max-width: 1192px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        margin: 0 auto; 
    }

    .curso-text {
        width: 100%;
        font-family: ${theme.fontFamily.primary};
        font-size: 30px;
        margin-top: 48px;
    }

    @media (max-width: 1192px) {
        .curso-text {
            margin: 48px 1rem 1rem 1rem;
        }
    }



    .card-cursos {
        width: 275px;
        height: 436px;
        margin-bottom: 50px;
    }

    .section-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 30px;
    }

    .track {
        display: flex;
        gap: 3.18px;
        font-family: ${theme.fontFamily.primary};
        font-size: 13px;
    }

    .track > p:nth-child(2) {
        color: ${theme.color.button.primary};
    }

    h3 {
        font-family: ${theme.fontFamily.primary};
        padding-bottom:38px ;
    }

    .data {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
    }

    .wrapper-data {
        display: flex;
        gap: 7px;
        align-items: center;
    }

    
    .data img {
        width: 20px;
        height: 20px;
    }
    
    .format-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .format-data > p:nth-child(1) {
        font-family: ${theme.fontFamily.primary};
        font-size: 13px;
        padding-bottom: 7.4px;
    }

    .format-data > p:nth-child(2) {
        font-family: ${theme.fontFamily.primary};
        font-size: 15px;
    }















    .aulas {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        padding-bottom: 40px;
    }

    .wrapper-aulas {
        display: flex;
        gap: 7px;
        align-items: center;
    }

    .aulas img {
        width: 20px;
        height: 20px;
    }
    
    .format-aulas {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .format-aulas p {
        font-family: ${theme.fontFamily.primary};
        font-size: 13px;
    }











    .pessoa {
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
    }

    .wrapper-pessoa {
        display: flex;
        gap: 7px;
        align-items: center;
    }

    .pessoa img {
        width: 20px;
        height: 20px;
    }
    
    .format-pessoa {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .format-pessoa > p {
        font-family: ${theme.fontFamily.primary};
        font-size: 13px;
    }

    .format-pessoa > .name {
        width: 70%;
    }












    .inscri????o {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30px;
        background: ${theme.color.warning.primary};
        border-radius: 20px;
        margin-top:35px;
    }

    .inscri????o p {
        font-size: 12px;
        font-family: ${theme.fontFamily.primary};
    }

















    button {
        background: ${theme.color.button.primary};
        border: none;
        width: 100%;
        height: 52px;
        border-radius: 20px;
        margin-top: 25px;
        color: white;
        font-size: 20px;
        font-family: ${theme.fontFamily.primary};
        box-shadow: 0px 2px 4px 0px #00000029;
        cursor: pointer;
    }






    .ver-mais {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 42px;
        font-family: ${theme.fontFamily.primary};
    }


`