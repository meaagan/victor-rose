import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'

const Victor = () => (
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
                fluid(maxWidth: 800) {
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

        render={data => (
            <div>
                <h2 style={{textAlign: 'center'}}>VICTOR ROSE</h2>
                <VictorContainer>
                    <Art>
                        <Img fluid={data.victorrose.childImageSharp.fluid} />
                    </Art>
                    <div>
                        <p>
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
                    </div>
                </VictorContainer>
                <TrioContainer>
                    <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
                    <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
                    <Trio><Img fluid={data.coworking.childImageSharp.fluid} /></Trio>
                </TrioContainer>
            </div>
        )}
    />
);

const TrioContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10%;
`

const Trio = styled.figure`
    margin: 0;
    max-width: 300px;
    width: 100%;
`;

const Art = styled.figure`
    max-width: 500px;
    width: 100%;
`;

const VictorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
`

export default Victor;
