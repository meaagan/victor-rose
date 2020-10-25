import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { TrioContainer, Trio } from '@components/global';
// import Box from '@static/box.inline.svg'

const Triptych = () => (
    <StaticQuery
        query={graphql`
        query {
            ladies: file(
                sourceInstanceName: { eq: "homepage" }
                name: { eq: "ladies" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }

            victorrose: file(
                sourceInstanceName: { eq: "homepage" }
                name: { eq: "victorrose" }
            ) {
            childImageSharp {
                fluid(maxWidth: 765) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }
        }
        `}

        render={data => (
            <div>
                <TrioContainer>
                        <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
                        <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
                        <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
                </TrioContainer>
                {/* <Box /> */}
            </div>
        )}
    />
)

export default Triptych