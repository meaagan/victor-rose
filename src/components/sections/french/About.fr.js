import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Coworking from '@sections/components/coworking'

import { Grid, OrderCarousel, Art, FlipText, BoxContainer, Box } from '../style'
import { Section, Container } from '@components/global';

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
            <BoxContainer>
                <Art><Img fluid={data.ladies.childImageSharp.fluid}  style={{zIndex:'1'}} /></Art>
              <Box></Box>
            </BoxContainer>
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
            <BoxContainer>
                <Art><Img fluid={data.artist.childImageSharp.fluid} style={{zIndex:'1'}} /></Art>
              <Box></Box>
            </BoxContainer>
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

export default About;
