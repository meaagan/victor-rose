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
            <BoxContainer>
                <TrioContainer>
                    <Trio><Img fluid={data.ladies.childImageSharp.fluid} style={{zIndex:'1'}} /></Trio>
                    <Trio><Img fluid={data.ladies.childImageSharp.fluid} style={{zIndex:'1'}} /></Trio>
                    <Trio><Img fluid={data.ladies.childImageSharp.fluid} style={{zIndex:'1'}} /></Trio>
                </TrioContainer>
                <Box></Box>
            </BoxContainer>
        )}
    />
)

const Box = styled.div`
    background-color: ${props => props.theme.color.box};
    height: 98%;
    width: 77%;
    display: flex;
    position: absolute;
    left: 149px;
    top: 20px;

    @media (max-width: ${props => props.theme.screen.lg}) {
        height: 98%;
        width: 97%;
        display: flex;
        position: absolute;
        left: 30px;
        top: 20px;
    }

    @media (max-width: ${props => props.theme.screen.md}) {
        height: 100%;
        width: 100%;
        display: flex;
        position: absolute;
        left: 10px;
        top: 10px;
    }
`
const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top:50px;
`

export default Triptych