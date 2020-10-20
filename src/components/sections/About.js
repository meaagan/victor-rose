import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            <Art>
              <Img fluid={data.ladies.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Our Story</h2>
              <p>
              Victor Rose Espresso Bar in Pointe-Claire Village is a Direct Fair Trade Coffee Shop run by local mother daughter duo, Marie & Terry. A community spot to meet your friends, or grab your morning coffee on the way to work!
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Artist of the Month</h2>
              <h3>On Hold during COVID-19</h3>
              <p>
                
              </p>
            </div>
            <Art>
              <Img fluid={data.artist.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            {/* <Carousel 
              swipeable={false}
              responsive={responsive}
              ssr={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
            > */}
            <Art><Img fluid={data.coworking.childImageSharp.fluid} /></Art>        
            {/* <Art><Img fluid={data.coworking2.childImageSharp.fluid} /></Art> */}
            {/* <Art><Img fluid={data.coworking3.childImageSharp.fluid} /></Art> */}
            {/* </Carousel> */}
            <div>
              <h2>Coworking Space</h2>
              <h3>On Hold during COVID-19</h3>
              <p>
                
              </p>
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

const Art = styled.figure`
  margin: 0;
  max-width: 765px;
  width: 100%;
`;

const ImageBox = styled.div`
  background-color: brown;
  position:absolute;
  top: 10px;
  left: 10px;
  height: 100px;
  width:100px;
`;

export default About;
