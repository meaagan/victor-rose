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
          <h2>Nous embauchons un barista!</h2><br/>
            <p style={{color : 'white'}}>
              1 an d'expérience dans le domaine du café de spécialité (seuls les CV avec une expérience dans le domaine du café de spécialité seront pris en compte), <br />.
              Sait comment composer un café<br />.
              Aime les chiens et les gens<br />
              Disponible les week-ends<br/>
              A un bon œil et une capacité à poster des histoires IG mignonnes est un plus !<br/>.
              Envoyez votre CV par courriel à victorrose2015@gmail.com ou passez nous voir pour le déposer. Merci!
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
