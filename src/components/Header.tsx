import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header<any>`
    padding: 1em 0;
`;

interface Header extends React.HTMLAttributes<HTMLHeadElement> {

}

const Header: React.FC<Header> = () => {
    return (
        <StyledHeader>
            <h1>Teams Todo Board</h1>
        </StyledHeader>
    );
};

export default Header;