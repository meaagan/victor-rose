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
                            Victor Rose est né en 1897 à Londres, en Angleterre, et est décédé en 1989. Après avoir été soldat dans les tranchées durant la Première Guerre Mondiale, il s’est rendu au Canada pour étudier la théologie à l’université McGill. Artiste dès sa jeunesse, son talent se traduisait dans tous les aspects de sa vie.
                        <br /><br />
                            Il était un Pasteur, un musicien, un pacifiste, un humanitariste, un mari, un père, un grand-père et, toujours, un artiste. Victor Rose est l’un des membres fondateurs de L’Association des Artistes du Lakeshore.
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
