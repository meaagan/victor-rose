import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout.fr';
import Form from './components/form.fr';
import { StaticQuery, graphql } from 'gatsby';
import { TrioContainer, Trio } from '@components/global';
import Links  from './components/links'
import VRMap from './components/vrmap'
import Img from 'gatsby-image';

const Contact = () => (
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
        }
    `}
    render={data => (
      <Layout>
          <h1 style={{textAlign: 'center', paddingTop:'125px'}}>Contact</h1>
          <ContactContainer>
              <Left>
                <Links />
                <VRMap />
              </Left>
              <Right>
                <Form />
              </Right>
            </ContactContainer>
            <TrioContainer>
              <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
              <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
              <Trio><Img fluid={data.ladies.childImageSharp.fluid} /></Trio>
            </TrioContainer>
      </Layout>
    )}
  />
);

const Left = styled.div`
  width: 35%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`
const Right = styled.div`
  width: 35%;
  margin-top: 12px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 5%;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`
export default Contact;