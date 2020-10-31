import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import { Art, VictorText, VicImg, Box, VictorContainer } from './style'


const Victor = () => (
    <StaticQuery
        query={graphql`
        query {
            victorrose: file(
                sourceInstanceName: { eq: "about" }
                name: { eq: "VictorRose" }
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
            <VictorContainer>
                    <VicImg>
                        <Art><Img fluid={data.victorrose.childImageSharp.fluid} style={{zIndex:'1'}} /></Art>
                        <Box></Box>
                    </VicImg>
                    <VictorText>
                        <h2>VICTOR ROSE</h2>
                        <p>
                            Victor Rose est né en 1897 à Londres, en Angleterre, et est décédé en 1989. Après avoir été soldat dans les tranchées durant la Première Guerre Mondiale, il s’est rendu au Canada pour étudier la théologie à l’université McGill. Artiste dès sa jeunesse, son talent se traduisait dans tous les aspects de sa vie.
                            <br /><br />
                            Il était un Pasteur, un musicien, un pacifiste, un humanitariste, un mari, un père, un grand-père et, toujours, un artiste. Victor Rose est l’un des membres fondateurs de L’Association des Artistes du Lakeshore.
                        </p>
                        </VictorText>
            </VictorContainer>
        )}
    />
);


export default Victor;
