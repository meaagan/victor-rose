import React from 'react';
import Layout from '@common/Layout';
import Form from './components/form';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Container } from '@components/global';
import Links  from './components/links'
import VRMap from './components/vrmap'
import Triptych from '@components/common/Triptych'
import { Left, Right, ContactContainer} from './contactstyles'

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




export default Contact;