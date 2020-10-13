import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import { Section, Container } from '@components/global';

const Intro = () => (
    <StaticQuery
        query={graphql`
            query {
                coffee: file(
                    sourceInstanceName: { eq: "homepage" }
                    name: { eq: "coffee" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 500) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                }
                }
            }
        `}
    render={data => (
      <Section id="intro">
            <Introduction
                fluid={data.coffee.childImageSharp.fluid}
                tag="Intro"
            >
                <TextBox>
                    Victor Rose Espresso Bar in Pointe-Claire Village run by local mother daughter duo, Marie & Terry. A community spot to meet your friends, or grab your morning coffee on the way to work!
                </TextBox>
            </Introduction>

      </Section>
    )}
  />
)

const TextBox = styled.p`
    padding: 2%;
    background-color: rgba(255,255,255,0.5);
    width: 80%;
    margin: 15%;
`

const Introduction = styled(BackgroundImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    text-align: center;
`

export default Intro;