import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperFooter = styled.div`
    width: 100%;
    max-width: 1192px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 55px;
    gap: 38px;
    margin: 30px auto;

    .logo {
        display: flex;
    }

    .logo > h2 {
        font-size: 25px;
        font-family: ${theme.fontFamily.secondary};
        margin-bottom: 5px;
    }

    .lorem p{
        width: 375px;
        text-align: center;
        font-family: ${theme.fontFamily.primary};
    }


    .copyright p {
        color: ${theme.color.font.tertiary};
        font-family: ${theme.fontFamily.primary};
    }


`