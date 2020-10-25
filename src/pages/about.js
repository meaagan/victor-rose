import React from 'react';

import Layout from '@common/Layout';
import { Container, Section } from '@components/global';

import Victor from '@sections/about/Victor'
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
