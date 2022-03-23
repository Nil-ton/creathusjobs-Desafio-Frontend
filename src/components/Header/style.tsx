import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperHeader = styled.div`
    width: 100%;
    height: 64px;
    max-width: 1920px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 4px 0px #00000026;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1px;
    }

    .logo > h2 {
        font-size: 25px;
        font-family: ${theme.fontFamily.secondary};
        margin-bottom: 5px;
    }

    nav > ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 120px;
        font-family: ${theme.fontFamily.primary};
        font-weight: 500;
        color: ${theme.color.font.secondary};
    }

    nav > ul > li {
        cursor: pointer;
    }

    .entra-cadastro {
        font-family: ${theme.fontFamily.primary};
        color: ${theme.color.font.secondary};
        cursor: pointer;
    }
`