import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WrapperHeader = styled.div`
    width: 100%;
    height: 64px;
    display: flex;

    .logo {
        display: flex;
    }

    .logo > h2 {
        font-size: 25px;
        font-family: ${theme.fontFamily.secondary};
    }

    .logo > img {
        width: 25px;
        height: 25px;
    }
`