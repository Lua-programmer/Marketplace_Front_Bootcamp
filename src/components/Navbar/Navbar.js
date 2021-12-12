import React from 'react';
import Search from '../Search/Search';
import styled from 'styled-components';

const HeaderNav = styled.nav`
background: linear-gradient(135deg, rgba(100,217,87,1) 11%, rgba(156,222,146,1) 31%, rgba(174,246,199,1) 56%, rgba(227,255,168,1) 81%);
padding: .8rem;
`
const Navbar = () => {
    return (
        <HeaderNav >
            <Search/>
        </HeaderNav>
    )
}

export default Navbar;