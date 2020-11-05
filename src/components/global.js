import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  // overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }
`;

export const TrioContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Trio = styled.figure`
    margin: 0;
    max-width: 300px;
    width: 100%;
    -webkit-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
    -moz-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
    box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
`;