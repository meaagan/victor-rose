import React from 'react';

import Layout from '@common/Layout';
import { Container, Section } from '@components/global';

import Victor from '@sections/about/Victor'

const About = () => (
  <Layout>
    <Container>
      <Section>
        <Victor />
      </Section>
    </Container>
  </Layout>
);

export default About;
