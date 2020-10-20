import styled from 'styled-components';
import { Container } from '@components/global';

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background-image: none;
`

export const Bold = styled.span`
  ${props => props.theme.font_weight.bold}
`

export const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.white.dark};
  padding: 32px 0;
  position: static;
  bottom: 0;
  width: 100vw;
  overflow: hidden;
`;

export const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterText =  styled.p`
    ${props => props.theme.font_size.xsmall};
`