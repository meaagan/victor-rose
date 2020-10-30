import React from 'react';

import Layout from '@common/Layout.fr';
import { Container, Section } from '@components/global';

import Victor from '@sections/about/Victor.fr'
import Triptych from '@sections/about/triptych'

const About = () => (
  <Layout>
    <Container>
      <Section>
        <Victor />
        <Triptych />
      </Section>
    </Container>
  </Layout>
);

export default About;
