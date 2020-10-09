import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
    render={data => (
      <HeaderWrapper>
            <Art>
              <Img fluid={data.cheers.childImageSharp.fluid} />
            </Art>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
`;

export default Header;
