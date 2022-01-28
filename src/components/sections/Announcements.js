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
          name: { eq: "threetypesofcoffee" }
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
            <h1>Announcements</h1><br />
            <h2>We are hiring!</h2><br/>
            <p style={{color: 'white'}}>
              3rd wave coffee experience<br />
              Knowledge of how to Dial in coffee<br />
              Has a Love of people and dogs<br />
              Enthusiastic about coffee and community<br />
              Enjoys a quality cup of coffee<br /><br />
              Apply by e-mail or in person!
            </p>
          </TextBox>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(BackgroundImage)`
  height: 50vh;


  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;  
  color: ${props => props.theme.color.white.regular}; 
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
  width:100%;
  height:100%;
`;

export default Announcements;
