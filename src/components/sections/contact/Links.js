import React from 'react';
import styled from 'styled-components';
import { Section } from '@components/global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    return(
        <Section>
            <ContactLinks>
                <CLink><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span> 15C Cartier, Pointe-Claire, Quebec, H9S 4R5</CLink>
                <CLink><span><FontAwesomeIcon icon={faPhone} /></span> (514) 447-2711</CLink>
                <CLink><span><FontAwesomeIcon icon={faEnvelope} /></span> victorrose2015@gmail.com</CLink>
                <CLink><span><FontAwesomeIcon icon={faFacebook} /></span> <a href="http://www.facebook.com/VictorRoseEspressoBar">/VictorRoseEspressoBar</a> <span><FontAwesomeIcon icon={faInstagram} /></span><a href="http://www.instagram.com/victorrose2015" target="_blank"> @victorrose2015</a></CLink>
            </ContactLinks>
        </Section>
    )
}

const ContactLinks = styled.ul`
  list-style: none;
`

const CLink = styled.li`
  padding: 4px;
  padding-left:0;
`

export default Links