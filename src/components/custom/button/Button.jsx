import styled, { css } from "styled-components"

const Button = (props) => {
    const defineColor = (props) => {
        switch (props.color) {
            case 'primary':
                return props.theme.primaryColor;
            case 'secondary':
                return props.theme.secondaryColor;
            case 'tertiary':
                return props.theme.tertiaryColor;
            case 'quaternary':
                return props.theme.quaternaryColor;
            default:
                return props.theme.primaryColor;
        }
    }

    const StyledButton = styled.button`
        background-color: ${(props) => defineColor(props)};
        color: white;
        border: none;
        ${(props) => css`${props.sx}`}
    `;

    return <StyledButton sx={props.sx} style={props.style} onClick={props.onClick} color={props.color}>{props.children}</StyledButton>;
}

export default Button;