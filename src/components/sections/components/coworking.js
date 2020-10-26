import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { Container, ImageBox } from '@components/global';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './coworking.css'

const Coworking = () => {
    const data = useStaticQuery(graphql`
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
    `)

    const responsive = {
        desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
    };

    return (
        <Container>
            <StyledCarousel
                additionalTransfrom={0}
                arrows
                centerMode={false}
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                swipeable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                slidesToSlide={1}
                swipeable
                itemClass="item"
            >
                <Img fluid={data.coworking.childImageSharp.fluid} />
                <Img fluid={data.coworking2.childImageSharp.fluid} />
                <Img fluid={data.coworking3.childImageSharp.fluid} />
            </StyledCarousel>
        </Container>
    )
}

const StyledCarousel = styled(Carousel)`
  transition: all 0.5s ease 0s;
`

// const Art = styled.figure`
// //   max-width: 765px;
//   width: 100%;
//   height: 100%;
// `;

export default Coworking;