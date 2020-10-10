import React from 'react';

import Layout from '@common/Layout';
import Header from '@sections/Header';
import About from '@sections/About';
import Announcements from '@sections/Announcements';

const IndexPage = () => (
  <Layout>
    <Header />
    <Announcements />
    <About />
  </Layout>
);

export default IndexPage;
