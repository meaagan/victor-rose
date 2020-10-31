import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
 
const Header = () => {
  const { mobile, desktop } = useStaticQuery(
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

        mobile: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "window" }
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
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return(
    <HeaderWrapper>
      <Parallax
        Tag="section"
        fluid= {sources}
      >
      </Parallax>
    </HeaderWrapper>
  )
};



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