import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

export const BottomNavigation = styled(Navbar)`
position: fixed;
justify-content: space-between;
height:10%;
`;
export const BottomIcon = styled(Nav.Link)`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.5rem;
`;

