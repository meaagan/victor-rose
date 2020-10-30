// ABOUT

import styled from 'styled-components';
import Coworking from '@sections/components/coworking'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 100px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 50px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 2fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse
    }
  }
`;

export const Art = styled.figure`
  max-width: 765px;
  width: 100%;
  height: 100%;

  @media (max-width: ${props => props.theme.screen.md}) {
    order: 2;
  }
`;

export const FlipText = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    order: 1;
  }
`

export const OrderCarousel = styled(Coworking)`
  @media (max-width: ${props => props.theme.screen.md}) {
    order: 2;
  }
`

export const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: ${props => props.theme.screen.md}) {
        order: 2;
        width:90%;
    }
`

export const Box = styled.div`
    background-color: ${props => props.theme.color.box};
    height: 97%;
    width: 100%;
    position: absolute;
    left: 15px;
    top: 15px;
`