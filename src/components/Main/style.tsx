import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperMain = styled.div`
    h2 {
        font-family: ${theme.fontFamily.primary};
    }

    .card-cursos {
        width: 275px;
        height: 436px;
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
    }

    .data p {
        font-family: ${theme.fontFamily.primary};
        font-size: 15px;
    }


    .data p:nth-child(1) {
        font-family: ${theme.fontFamily.primary};
        font-size: 11px;
    }

    .data div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 7px;
    }

    .aulas p {
        font-family: ${theme.fontFamily.primary};
        font-size: 11px;
    }

`