import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
 
const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        cheers: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "cheers" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.cheers.childImageSharp.fluid
      return(
        <HeaderWrapper>
          <Parallax
            Tag="section"
            fluid= {imageData}
          >
          </Parallax>
        </HeaderWrapper>
      )
    }}
  />
);

const Parallax = styled(BackgroundImage)`
  background-attachment: fixed; 
  background-position: 60% 50%; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 100vh; 
`;

const HeaderWrapper = styled.div`
    height: 100vh;
`

export default Header;