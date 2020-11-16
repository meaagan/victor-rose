import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
 
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
    padding-top:25px;
`

export default Header;