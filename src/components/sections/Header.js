import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
 
const Header = () => {
  const { portrait, desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "coverphoto2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        portrait: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "coffee1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `)

  const sources = [
    portrait.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
  ]



  return(
    <HeaderWrapper>
      <Parallax
        Tag="section"
        fluid= {sources}
      >
      </Parallax>
      {/* <StyledImg fluid={sources} /> */}
    </HeaderWrapper>
  )
};

const Parallax = styled(Img)`
  position: absolute; 
  top: 0px; 
  left: 0px;
  width: 100vw; 
  height: 100vh; 
  object-fit: cover; 
  object-position: center center; 
  opacity: 1; 
  transition: none 0s ease 0s;

`;



const HeaderWrapper = styled.div`
    // height: 100vh;
    padding-top:25px;
`

export default Header;