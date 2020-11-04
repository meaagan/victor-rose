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
                        Victor Rose est né en 1897 à Londres, en Angleterre, et est décédé en 1989. Après avoir servi dans les tranchées durant la Première Guerre mondiale, il est venu au Canada pour étudier la théologie à l’Université McGill. Artiste dès l’enfance, il a manifesté son talent dans tous les aspects de sa vie. 
                            <br /><br />
                            Il était Pasteur, musicien, pacifiste et impliqué dans l’aide humanitaire. Un époux, un père, un grand-père, il a toujours été un artiste. Victor Rose fut un membre fondateur de l’Association des artistes de Lakeshore. 
                        </p>
                        </VictorText>
            </VictorContainer>
        )}
    />
);


export default Victor;
