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
  ELink,
  StyledLink } from "./style"



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
    { title: `À Propos`, path: `/fr/about` },
    { title: `Menu`, path: `${data.file.publicURL}` },
    { title: `Contact`, path: `/fr/contact` },
  ]

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar style={{backgroundColor: 'white'}}>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand><HomeLink to="/fr">VICTOR ROSE</HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/fr/about' key='about' style={{backgroundImage: 'linear-gradient(0deg, rgb(202,157,124) 50%, transparent 50%)'}}>À Propos</StyledLink>
                <StyledLink to='/contact' key='contact' style={{backgroundImage: 'linear-gradient(0deg, rgb(233,203,167) 50%, transparent 50%)'}}>Contact</StyledLink>
                <ELink href={data.file.publicURL} key='menu' style={{backgroundImage: 'linear-gradient(0deg, rgb(245,238,220) 50%, transparent 50%)'}} >Menu</ELink>
                <StyledLink to='/' key='home'>English</StyledLink>
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
