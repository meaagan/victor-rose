import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import BoxedImage from '@sections/components/boxedimage'
import { Grid, OrderCarousel, FlipText } from './style'
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
          <Grid inverse>
            <BoxedImage image={data.story.childImageSharp.fluid} />
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
            <BoxedImage image={data.artist1.childImageSharp.fluid} />
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
