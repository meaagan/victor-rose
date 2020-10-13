import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { Section } from '@components/global';

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
      <Section id="announcements">
        <StyledContainer
            tag="announcements"
            fluid={data.announcements.childImageSharp.fluid}
        >
          <TextBox>
            <h1>Announcements</h1>
            <p>
              Lorem ipsum dolor amet
            </p>
          </TextBox>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(BackgroundImage)`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const TextBox = styled.div`
  text-align: center;  
  color: ${props => props.theme.color.white.regular}; 
`;

export default Announcements;
