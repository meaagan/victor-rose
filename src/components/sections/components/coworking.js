import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'
// import { Container, ImageBox } from '@components/global';
import './coworking.css'

const Coworking = () => (
    <StaticQuery
        query={graphql`
        query {
            coworking2: file(
            sourceInstanceName: { eq: "homepage" }
            name: { eq: "coworking2" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }

            coworking3: file(
            sourceInstanceName: { eq: "homepage" }
            name: { eq: "coworking3" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }

            coworking: file(
            sourceInstanceName: { eq: "homepage" }
            name: { eq: "coworking" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }
        }
    `}

        render={data=> (
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <Art><Img className="d-block w-100" fluid={data.coworking.childImageSharp.fluid}  /></Art>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Art><Img className="d-block w-100" fluid={data.coworking2.childImageSharp.fluid} /></Art>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Art><Img className="d-block w-100" fluid={data.coworking3.childImageSharp.fluid} /></Art>
                    </Carousel.Item>
                </Carousel>
    )}
    />
)



const Art = styled.figure`
    max-width: 765px;
    width: 100%;
    height: 100%;
    // margin-top: -30px;
    // margin-left: -20px;
`;

export default Coworking;

