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
            <h1>Annonces</h1><br/>
            <p style={{color : 'white'}}>
            Nous serons fermés du 1e au 10 janvier. Joyeux fêtes!
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
