import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import Navbar from '@common/Navbar';
import Footer from '@common/Footer/Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyles />
      <Navbar />
        {children}
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
