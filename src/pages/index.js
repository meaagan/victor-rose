import React from 'react';

import Layout from '@common/Layout';
import Header from '@sections/Header';
import About from '@sections/About';
// import Announcements from '@sections/Announcements';
import Instagram from '@sections/Instagram'

const IndexPage = () => (
  <Layout>
    <Header />
    {/* <Announcements /> */}
    <About />
    <Instagram />
  </Layout>
);

export default IndexPage;
