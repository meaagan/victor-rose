import React from "react"

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
  { title: `menu`, path: `/menu` },
  { title: `contact`, path: `/contact` },
]

const Navbar = () => {
  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar style={{backgroundColor: 'white'}}>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand>VICTOR ROSE</Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/about' key='about' style={{backgroundImage: 'linear-gradient(0deg, rgb(106, 43, 5) 50%, transparent 50%)'}}>About</StyledLink>
                <StyledLink to='/menu' key='menu' style={{backgroundImage: 'linear-gradient(0deg, rgb(150, 67, 21) 50%, transparent 50%)'}}>Menu</StyledLink>
                <StyledLink to='/contact' key='contact' style={{backgroundImage: 'linear-gradient(0deg, rgb(187, 107, 36) 50%, transparent 50%)'}}>Contact</StyledLink>
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

export default Navbar;
