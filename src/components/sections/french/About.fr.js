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

        coworking2: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "coworking2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        coworking3: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "coworking3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        coworking: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "coworking" }
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
            <div>
              <h2>Notre Histoire</h2>
              <p>
                Le Victor Rose Espresso Bar du village de Pointe-Claire est un café du commerce équitable dirigé par le duo mère-fille de la région, Marie & Terry. Un lieu communautaire pour rencontrer vos amis ou prendre votre café du matin sur le chemin du travail!
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Artist du Mois</h2>
              <h3>Sur pause durant COVID-19</h3>
              <p></p>
            </div>
            <ImageBox>
              <Art><Img fluid={data.artist.childImageSharp.fluid} /></Art>
            </ImageBox>
          </Grid>
          <Grid inverse>
            <OrderCarousel />
            <div>
              <h2>Espace Travail Commun</h2>
              <h3>Sur pause durant COVID-19</h3>
              <p></p>
            </div>
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
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const OrderCarousel = styled(Coworking)`
  @media (max-width: ${props => props.theme.screen.md}) {
    order: 2;
  }
`

const Art = styled.figure`
  // margin: 0;
  max-width: 765px;
  width: 100%;
  height: 100%;
  margin-top: -30px;
  margin-left: -20px;
`;

export default About;
