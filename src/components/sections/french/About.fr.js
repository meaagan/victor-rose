import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import BoxedImage from '@sections/components/boxedimage'
import { Grid, OrderCarousel, FlipText } from '../style'
import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        story: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "happyholidays" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        artist1: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "art2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        artist2: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "art8" }
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
          <Fade left>
          <Grid inverse>
            <BoxedImage image={data.story.childImageSharp.fluid} />
            <FlipText>
              <h2>Notre Histoire</h2>
              <p>
                Le Victor Rose Espresso Bar du village de Pointe-Claire est un café du commerce équitable dirigé par le duo mère-fille de la région, Marie & Terry. Un lieu communautaire pour rencontrer vos amis ou prendre votre café du matin sur le chemin du travail!
              </p>
            </FlipText>
          </Grid>
          </Fade>
          <Fade right>
          <Grid>
            <FlipText>
            <h2>Artist du Mois</h2>
              <h3>Sur pause durant COVID-19</h3>
              <p></p>
            </FlipText>
            <BoxedImage image={data.artist1.childImageSharp.fluid} />
          </Grid>
          </Fade>
          <Fade left>
          <Grid inverse>
            <OrderCarousel />
            <FlipText>
            <h2>Espace Travail Commun</h2>
              <h3>Sur pause durant COVID-19</h3>
              <p></p>
            </FlipText>
          </Grid>
          </Fade>
        </Container>
      </Section>
    )}
  />
);

export default About