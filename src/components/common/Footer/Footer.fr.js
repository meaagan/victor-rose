import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';

import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import {
  StyledContainer,
  Copyright,
  FooterWrapper,
  SocialIcons,
  SocialLink,
  FooterText,
  Bold,
} from './style';

const facebookIcon = faFacebookSquare
const instagramIcon = faInstagramSquare

const SOCIAL = [
  {
    icon: facebookIcon,
    link: 'https://www.facebook.com/VictorRoseEspressoBar/',
  },
  {
    icon: instagramIcon,
    link: 'https://www.instagram.com/victorrose2015',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(
          sourceInstanceName: { eq: "footer" }
          name: { eq: "logoroundwhite" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <Img fluid={data.logo.childImageSharp.fluid} />
            </Copyright>
              <div>
                <h2>Heures d'Ouverture</h2>
                <FooterText>
                  <Bold>LUN-SAM</Bold>
                  <br /> 
                  8H - 15H
                  <br />
                  <Bold>DIM</Bold>
                  <br />
                  Fermer
                </FooterText>
              </div>
              <div>
                <h2>Location</h2>
                <FooterText>
                  15C Cartier Ave
                  <br /> 
                  Pointe-Claire, Quebec
                  <br />
                  H9S 4R5
                </FooterText>
              </div>
              <div>
                <h2>Contact</h2>
                <FooterText>
                  (514) 447-2711
                  <br /> 
                  victorrose2015@gmail.com
                </FooterText>
                <SocialIcons>
                  {SOCIAL.map(({ icon, link }) => (
                    <SocialLink key={link} href={link}>
                      <FontAwesomeIcon icon={icon} />
                    </SocialLink>
                  ))}
                </SocialIcons>
              </div>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

export default Footer;