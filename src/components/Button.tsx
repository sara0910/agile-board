import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{}>`
    border: none;
    background: none;
    box-shadow: none;
    padding: 12px;
    margin: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
    min-width: fit-content;
    span {
        font-size: 14px;
        font-weight: 600;
        padding: 0 6px;
    }
`;

interface Button extends React.HTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<Button> = ({ children, ...props }) => (
    <StyledButton {...props}>
        {children}
    </StyledButton>
);

export default Button;