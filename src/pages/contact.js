import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import  Form from './form';
import { Container } from '@components/global';
import Links  from '@sections/contact/Links'

const Contact = () => (
    <Layout>
      <Container>
      <h1>Contact</h1>
      <ContactContainer>
          <Links />
          <Form />
        </ContactContainer>
      </Container>
    </Layout>
);

const ContactLinks = styled.ul`
  list-style: none;
`

const ContactContainer = styled(Container)`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  margin-bottom: 5%;
`
export default Contact;