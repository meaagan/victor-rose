import React from "react"

import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby'
import SideDrawer from "./SideDrawer"
import { Toolbar, Hidden } from "@material-ui/core";
import HideOnScroll from "./HideOnScroll"
import { 
  Brand, 
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink,
  ELink } from "./style"



const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: {eq: "pdf"}) {
        id
        publicURL
      }
    }
  `)  

  const navLinks = [
    { title: `about`, path: `/about` },
    { title: `menu`, path: `${data.file.publicURL}` },
    { title: `contact`, path: `/contact` },
    { title: `order online`, path: `https://order.koomi.com/victor-rose-espresso-bar-WdqQQADa84/en`}
  ]

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar style={{backgroundColor: 'white'}}>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand><HomeLink to="/">VICTOR ROSE</HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/about' key='about' style={{backgroundImage: 'linear-gradient(0deg, rgb(156,119,92) 50%, transparent 50%)'}}>About</StyledLink>
                <StyledLink to='/contact' key='contact' style={{backgroundImage: 'linear-gradient(0deg, rgb(202,157,124) 50%, transparent 50%)'}}>Contact</StyledLink>
                <ELink href={data.file.publicURL} key='menu' style={{backgroundImage: 'linear-gradient(0deg, rgb(233,203,167) 50%, transparent 50%)'}} >Menu</ELink>
                <ELink href='https://order.koomi.com/victor-rose-espresso-bar-WdqQQADa84/en' key='order online' style={{backgroundImage: 'linear-gradient(0deg, rgb(245,238,220) 50%, transparent 50%)'}} >Order Online</ELink>
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
