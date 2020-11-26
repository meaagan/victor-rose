import styled from 'styled-components';
import { Container } from '@components/global';

export const SocialLink = styled.a`
  color: black;
`

export const Bold = styled.span`
  ${props => props.theme.font_weight.bold}
`

export const SocialIcons = styled.div`
  display: flex;



  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
    justify-content: center;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.white.dark};
  padding: 32px 0;
  position: static;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

export const Copyright = styled.figure`
  margin: 0;
  max-width: 150px;
  width: 100%;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const FooterText =  styled.p`
    ${props => props.theme.font_size.xsmall};
`