import React from "react"

import styled from 'styled-components';
import { Link } from 'gatsby'
import SideDrawer from "./SideDrawer"
import { Toolbar, Hidden } from "@material-ui/core";
import HideOnScroll from "./HideOnScroll"
import { 
  Brand, 
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink } from "./style"

const navLinks = [
  { title: `about`, path: `/about` },
  // { title: `menu`, path: `/menu` },
  { title: `contact`, path: `/contact` },
]

const Navbar = () => {
  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar style={{backgroundColor: 'white'}}>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand><HomeLink to="/">VICTOR ROSE</HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/about' key='about' style={{backgroundImage: 'linear-gradient(0deg, rgb(202,157,124) 50%, transparent 50%)'}}>About</StyledLink>
                {/* <StyledLink to='/menu' key='menu' style={{backgroundImage: 'linear-gradient(0deg, rgb(233,203,167) 50%, transparent 50%)'}}>Menu</StyledLink> */}
                <StyledLink to='/contact' key='contact' style={{backgroundImage: 'linear-gradient(0deg, rgb(245,238,220) 50%, transparent 50%)'}}>Contact</StyledLink>
                <StyledLink to='/fr' key='home'>Français</StyledLink>
              </NavbarList>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </NavContainer>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.black.regular};
`
export default Navbar;
