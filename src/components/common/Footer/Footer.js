import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './footer.css'

import styled from 'styled-components'

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
        levelground: file(
          sourceInstanceName: { eq: "footer" }
          name: { eq: "levelground" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }


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
                <h2>Hours</h2>
                <FooterText>
                  <Bold>MON-SAT</Bold>
                  <br /> 
                  8AM - 3PM
                  <br />
                  <Bold>SUN</Bold>
                  <br />
                  Closed
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
                      <FontAwesomeIcon icon={icon} className="fontIcon" />
                    </SocialLink>
                  ))}
                </SocialIcons>
              </div>
              <StyledLink href="https://levelground.com/" rel="noreferrer" target="_blank">
                  <Img fluid={data.levelground.childImageSharp.fluid} style={{width:'60px', marginTop: '20px'}} />
              </StyledLink>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const StyledLink = styled("a")`
  // background-image: linear-gradient(0deg, rgb(233,203,167) 50%, transparent 50%);
  // color: ${props => props.theme.color.black.light};
  // text-decoration: none;
  // padding-left: 0.25em;
  // padding-right: 0.25em;

  // &:hover {
  //   text-decoration: none;
  // }
`

export default Footer;
