import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import { Section, Container } from '@components/global';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
            edges {
                node {
                id
                preview
                localFile {
                    childImageSharp {
                    fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
              }
              original
            }
          }
        }
      }
    `)
        
    const instaPosts = data.allInstaNode.edges

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Section id="instagram">
            <Container>
                <h2>Follow us on Instagram</h2>
                <Carousel
                    swipeable={true}
                    centerMode={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    keyBoardControl={true}
                    customTransition='all .5'
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {instaPosts.map(({ node }) => {
                        return(
                            <div>
                                <Img fixed = {node.localFile.childImageSharp.fixed} />
                            </div>
                        )
                    })}
                </Carousel>
            </Container>
        </Section>
    )
}

export default Instagram;