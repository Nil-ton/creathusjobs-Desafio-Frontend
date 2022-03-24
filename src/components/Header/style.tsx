import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperHeader = styled.div`
    width: 100%;
    height: 64px;
    box-shadow: 0px 4px 4px 0px #00000026;
    
    .conteiner {
        width: 100%;
        max-width: 1192px;
        height: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1px;
    }

    @media (max-width: 1192px) {
        .logo {
            margin: 1rem;
        }
    }

    .logo > h2 {
        font-size: 25px;
        font-family: ${theme.fontFamily.secondary};
        margin-bottom: 5px;
    }

    nav > ul {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 120px;
        font-family: ${theme.fontFamily.primary};
        font-weight: 500;
        color: ${theme.color.font.secondary};
    }

    @media (max-width: 749px) {
        nav > ul {
            gap: 30px
        }
    }

    nav > ul > li {
        cursor: pointer;
    }

    .entra-cadastro {
        font-family: ${theme.fontFamily.primary};
        color: ${theme.color.font.secondary};
        cursor: pointer;
        margin: 1rem;
    }
`