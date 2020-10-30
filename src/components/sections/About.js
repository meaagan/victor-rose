import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Grid, OrderCarousel, Art, FlipText, BoxContainer, Box } from './style'
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
            <BoxContainer>
                <Art><Img fluid={data.artist.childImageSharp.fluid} style={{zIndex:'1'}} /></Art>
              <Box></Box>
            </BoxContainer>
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


export default About;
