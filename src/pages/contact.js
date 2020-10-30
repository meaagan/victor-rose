import React from 'react';
import Layout from '@common/Layout';
import Form from './components/form';
import { StaticQuery, graphql } from 'gatsby';
import { TrioContainer, Trio, Section, Container } from '@components/global';
import Links  from './components/links'
import VRMap from './components/vrmap'
import Img from 'gatsby-image';
import Triptych from '@sections/about/triptych'
import { Left, Right, ContactContainer } from './contactstyles' 

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
            <Triptych />
          </Section>
        </Container>
      </Layout>
    )}
  />
);


export default Contact;