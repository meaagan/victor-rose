import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Coworking from '@sections/components/coworking'

import { Section, Container, ImageBox } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        ladies: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "ladies" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        artist: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "artist" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid inverse>
            <ImageBox>
              <Art><Img fluid={data.ladies.childImageSharp.fluid} /></Art>
            </ImageBox>
            <FlipText>
              <h2>Our Story</h2>
              <p>
              Victor Rose Espresso Bar in Pointe-Claire Village is a Direct Fair Trade Coffee Shop run by local mother daughter duo, Marie & Terry. A community spot to meet your friends, or grab your morning coffee on the way to work!
              </p>
            </FlipText>
          </Grid>
          <Grid>
            <FlipText>
              <h2>Artist of the Month</h2>
              <h3>On Hold during COVID-19</h3>
              <p></p>
            </FlipText>
            <ImageBox>
              <Art><Img fluid={data.artist.childImageSharp.fluid} /></Art>
            </ImageBox>
          </Grid>
          <Grid inverse>
            <OrderCarousel />
            <FlipText>
              <h2>Coworking Space</h2>
              <h3>On Hold during COVID-19</h3>
              <p></p>
            </FlipText>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Grid = styled.div`
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

const Art = styled.figure`
  max-width: 765px;
  width: 100%;
  height: 100%;
  margin-top: -30px;
  margin-left: -20px;

  @media (max-width: ${props => props.theme.screen.md}) {
    order: 2;
  }
`;

const FlipText = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    order: 1;
  }
`

const OrderCarousel = styled(Coworking)`
  @media (max-width: ${props => props.theme.screen.md}) {
    order: 2;
  }
`

export default About;
