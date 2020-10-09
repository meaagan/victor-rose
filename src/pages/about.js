import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar'
import { Container } from '@components/global';

const About  = () => (
  <Layout>
    <Container>
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default About;
