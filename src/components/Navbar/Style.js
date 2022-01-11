import styled from "styled-components";

import { Form, Navbar } from "react-bootstrap";

export const HeaderNav = styled(Navbar)`
padding:auto;
display: flex;
justify-content: space-between;
height:13%;
`;

export const LinkNav = styled(Navbar.Brand)`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.2rem;
padding: 0.5rem;
`;

export const InputSearch = styled(Form.Control)`
border-radius: .3rem;
padding: .2rem;
background-color: rgb(224, 228, 222);
border-color: rgb(224, 228, 222);
font-size:0.6rem;
`;

export const NavbarSearch = styled.div`
display: flex;
padding: 0.2rem;
width:100%;
justify-content: space-around;
`;
export const ButtonSearch = styled.div`
font-size: 1.2rem;
color: rgb(6, 33, 23);
`;
