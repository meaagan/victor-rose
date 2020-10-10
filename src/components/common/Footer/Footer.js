import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '@common/ExternalLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import {
  StyledContainer,
  Copyright,
  FooterWrapper,
  SocialIcons,
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
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
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
              {/* Small logo here */}
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <FontAwesomeIcon icon={icon} />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);



export default Footer;
