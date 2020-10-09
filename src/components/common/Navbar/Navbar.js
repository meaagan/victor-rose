import React, { Component } from 'react';

import { Container } from '@components/global';
import { Link } from "gatsby"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  StyledLink,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['about', 'menu', 'contact'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavList = () => (
    <NavListWrapper>
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}><StyledLink to={navItem}>{navItem}</StyledLink></NavItem>
        ))}
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>
            <Link 
              to="/"
              style={{ color: 'black', textDecoration: 'none'}}
            >
                VICTOR ROSE
            </Link>
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList()}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList()}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
