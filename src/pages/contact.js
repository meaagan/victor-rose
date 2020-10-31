import React from 'react';
import Layout from '@common/Layout';
import Form from './components/form';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Container } from '@components/global';
import Links  from './components/links'
import VRMap from './components/vrmap'
import styled from 'styled-components';
import Triptych from '@components/common/Triptych'

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        pic1: file(
          sourceInstanceName: { eq: "contact" }
          name: { eq: "latteheart" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        pic2: file(
          sourceInstanceName: { eq: "contact" }
          name: { eq: "gingerbreadlatte" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        pic3: file(
          sourceInstanceName: { eq: "contact" }
          name: { eq: "Swan" }
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
        <Container>
          <Section>
          <h1 style={{textAlign: 'center'}}>Contact</h1>
          <ContactContainer>
              <Left>
                <Links />
                <VRMap />
              </Left>
              <Right>
                <Form />
              </Right>
            </ContactContainer>
            <Triptych pic1={data.pic1.childImageSharp.fluid} pic2={data.pic2.childImageSharp.fluid} pic3={data.pic3.childImageSharp.fluid}/>
          </Section>
        </Container>
      </Layout>
    )}
  />
);

const Left = styled.div`
  width: 50%;
  margin-top: 12px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`
const Right = styled.div`
width: 45%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`

const ContactContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 5%;
    overflow: hidden;
    margin-top: 12px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`


export default Contact;