import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Section, Container } from '@components/global';

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
            edges {
                node {
                id
                original
                localFile {
                    childImageSharp {
                    fixed(width: 150, height: 150) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                }
                }
            }
        }
    `)
        
    const instaPosts = data.allInstaNode.edges

    return (
        <Section id="about">
            <Container>
                <h1>Hello</h1>
                <ul>
                    {instaPosts.map(({ node }) => {
                        return(
                            <li key ={node.id}>
                                <Img fixed = {node.localFile.childImageSharp.fixed} />
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </Section>
    )
}

export default Instagram;