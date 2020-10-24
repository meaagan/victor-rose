import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import  Form from './components/form';
import { Section } from '@components/global';
import Links  from './components/links'
import LeafletMap from './components/leafletmap'

const Contact = () => (
    <Layout>
      <Section>
        <h1 style={{textAlign: 'center'}}>Contact</h1>
        <ContactContainer>
            <Left>
              <Links />
                {typeof window !== 'undefined' &&
                  <LeafletMap
                    position={[45.430254, -73.823311]}
                    zoom={20}
                    markerText=""
                  />
                }
            </Left>
            <StyledForm />
          </ContactContainer>
      </Section>
    </Layout>
);

const StyledForm = styled(Form)`
  width: 60%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`

const Left = styled.div`
  width: 40%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 5%;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`
export default Contact;