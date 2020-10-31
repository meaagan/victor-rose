import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import StyledCarousel from '@components/common/StyledCarousel'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

const Coworking = () => (
    <StaticQuery
        query={graphql`
        query {
            coworking1: file(
            sourceInstanceName: { eq: "coworking" }
            name: { eq: "coworking1" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }

            coworking2: file(
            sourceInstanceName: { eq: "coworking" }
            name: { eq: "coworking2" }
            ) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
            }
            
            coworking3: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking3" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }
                
            coworking4: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking4" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                
            coworking5: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking5" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                
            coworking6: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking6" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                
            coworking7: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking7" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                
            coworking8: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking8" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                
            coworking9: file(
                sourceInstanceName: { eq: "coworking" }
                name: { eq: "coworking9" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

            coworking10: file(
            sourceInstanceName: { eq: "coworking" }
            name: { eq: "coworking10" }
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
            <StyledCarousel>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking1.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking2.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking3.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking4.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking5.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking6.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking7.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking8.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking9.childImageSharp.fluid} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img className="d-block w-100" fluid={data.coworking10.childImageSharp.fluid} />
                    </Carousel.Item>
            </StyledCarousel>
    )}
    />
)

export default Coworking;

