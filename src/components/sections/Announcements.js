import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Announcements = () => (
  <StaticQuery
    query={graphql`
      query {
        announcements: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "announcements" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000 maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <StyledSection>
        {/* <StyledContainer> */}
          <Art>
            <Img fluid={data.announcements.childImageSharp.fluid} />
          </Art>
          <TextBox>
            <h1>Announcements</h1>
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor amet
            </p>
          </TextBox>
        {/* </StyledContainer> */}
      </StyledSection>
    )}
  />
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.color.white.regular};

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const StyledSection = styled(Section)`
display: flex;
margin: 0 auto;
width: 100%;
text-align: center;
`;

const TextBox = styled.div`
  position: absolute;    
  height: 100%;
  text-align: center;    
  width: 100%;
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
`;

export default Announcements;
