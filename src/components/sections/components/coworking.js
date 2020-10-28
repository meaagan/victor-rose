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
                        <Img className="d-block w-100" fluid={data.coworking.childImageSharp.fluid}  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking2.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking3.childImageSharp.fluid} />
                    </Carousel.Item>
                </Carousel>
    )}
    />
)

export default Coworking;

