import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import Form from '@sections/Form';
import Container from '@components/global';

const Contact = () => {
    return(
    <Layout>
      <Container>
        <h1>Contact</h1>
        <ContactContainer>
          <ContactLinks>
            <CLink>15C Cartier, Pointe-Claire, Quebec, H9S 4R5</CLink>
            <CLink>(514) 447-2711</CLink>
            <CLink>victorrose2015@gmail.com</CLink>
            <CLink><a href="http://www.facebook.com/VictorRoseEspressoBar">/VictorRoseEspressoBar</a> <a href="http://www.instagram.com/victorrose2015" target="_blank">@victorrose2015</a></CLink>
          </ContactLinks>
          <FormContain>
            <Form />
          </FormContain>
        </ContactContainer>
      </Container>
    </Layout>
    )
};

const ContactLinks = styled.ul`
  list-style: none;
`

const FormContain = styled.div`
`

const ContactContainer = styled.div`
  display: flex;
`

const CLink = styled.li`
  padding: 4px;
  padding-left:0;
`

export default Contact;
