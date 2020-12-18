import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";
import {
  AppBar,
  Container,
  List,
  Toolbar
} from "@material-ui/core";

export const NavbarList = styled(List)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledToolbar = styled(Toolbar)`
display: flex;
justify-content: space-around;
`

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const AppBarStyled = styled(AppBar) `
  color: ${props => props.theme.color.black.regular};
  margin-bottom: 100%;
`;

export const StyledLink = styled(GatsbyLink)`
  margin: 0px 0.75em;
  ${props => props.theme.font_size.small};
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.black.light};
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;

  &:hover {
    color: black;
  }
`;

export const ELink = styled.a`
  margin: 0px 0.75em;
  ${props => props.theme.font_size.small};
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.black.light};
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;

  &:hover {
    color: black;
  }
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  color: ${props => props.theme.color.black.regular};
`;
