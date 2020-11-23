import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Layout from '@common/Layout.fr';
import { Container, Section } from '@components/global';

import Victor from '@sections/about/Victor.fr'
import Triptych from '@components/common/Triptych'
import AboutUs from '@sections/about/AboutUs.fr'

const About = () => (
  <StaticQuery
        query={graphql`
            query {
                pic1: file(
                    sourceInstanceName: { eq: "about" }
                    name: { eq: "hotchoc" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                pic2: file(
                    sourceInstanceName: { eq: "about" }
                    name: { eq: "coldbrew3" }
                ) {
                childImageSharp {
                    fluid(maxWidth: 765) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
                }

                pic3: file(
                    sourceInstanceName: { eq: "about" }
                    name: { eq: "coffeetrio" }
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
                <AboutUs />
                <Triptych  pic1={data.pic1.childImageSharp.fluid} pic2={data.pic2.childImageSharp.fluid} pic3={data.pic3.childImageSharp.fluid}/>
                <Victor />
              </Section>
            </Container>
          </Layout>
        )}
    />
);

export default About;
