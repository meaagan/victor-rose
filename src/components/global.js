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
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }
`;

export const ImageBox = styled.div`
  background: rgba(172,139,111,1);
  max-width: 765px;
  max-height: 765px;
  width: 100%;
  height: 100%;
  position: relative;
`;