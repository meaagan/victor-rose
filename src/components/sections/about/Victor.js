import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'
import { ImageBox, TrioContainer, Trio } from '@components/global';


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
                fluid(maxWidth: 765) {
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
                    <ImageBox>
                        <Art><Img fluid={data.victorrose.childImageSharp.fluid} /></Art>
                    </ImageBox>
                    <div style={{margin:'15px'}}>
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
            </div>
        )}
    />
);

const Art = styled.figure`
    max-width: 765px;
    width: 100%;
    height: 100%;
    margin-top: -30px;
    margin-left: -20px;
`;

const VictorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 15px;


    @media (max-width: ${props => props.theme.screen.sm}) {
        display: block;
        width: 90%;
        margin: 0 auto;
      }
`

export default Victor;
