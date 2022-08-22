import React from 'react';
import Layout from '@common/Layout.fr';
import Header from '@sections/Header';
import About from '@sections/french/About.fr';
import Announcements from '@sections/french/Announcements.fr';


const IndexPage = () => (
  <Layout>
    <Header />
    {/* <Announcements /> */}
    <About />
  </Layout>
);

export default IndexPage;
