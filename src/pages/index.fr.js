import React from 'react';
import Layout from '@common/Layout.fr';
import Header from '@sections/Header';
import About from '@sections/french/About.fr';
import Announcements from '@sections/french/Announcements.fr';
// import Instagram from '@sections/french/Instagram'

const IndexPage = () => (
  <Layout>
    <Header />
    {/* <Announcements /> */}
    <About />
    {/* <Instagram /> */}
  </Layout>
);

export default IndexPage;
