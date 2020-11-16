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
                        <h2 style={{textAlign: 'center'}}>VICTOR ROSE</h2>
                        <p style={{textAlign: 'justify'}}>
                            Victor Rose was born in London England in 1897 died in 1989. 
                            After serving in the trenches in the First World War he came 
                            to Canada to study theology at McGill University. 
                            An artist from childhood, he brought his talent into every 
                            aspect of his life.
                            <br /><br />
                            He was a Pastor, a musician, a pacifist, a humanitarian, a husband, 
                            a father, a grandfather and always an artist. Victor Rose was a 
                            founding member of the Lakeshore Artist Association.
                        </p>
                    </VictorText>
                </VictorContainer>
        )}
    />
);

export default Victor;
