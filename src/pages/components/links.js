import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
    return(
            <ContactLinks>
                <CLink><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span> 15C Cartier, Pointe-Claire, Quebec, H9S 4R5</CLink>
                <CLink><span><FontAwesomeIcon icon={faPhone} /></span> (514) 447-2711</CLink>
                <CLink><span><FontAwesomeIcon icon={faEnvelope} /></span> <StyledLink href="mailto:victorrose2015@gmail.com">victorrose2015@gmail.com</StyledLink></CLink>
                <CLink><span><FontAwesomeIcon icon={faFacebook} /></span> <StyledLink href="http://www.facebook.com/VictorRoseEspressoBar">/VictorRoseEspressoBar</StyledLink></CLink>
                <CLink><span><FontAwesomeIcon icon={faInstagram} /></span> <StyledLink href="http://www.instagram.com/victorrose2015" target="_blank">@victorrose2015</StyledLink></CLink>
            </ContactLinks>
    )
}

const ContactLinks = styled.ul`
  list-style: none;
  font-size: 24px; 
  line-height: 32px;
`

const StyledLink = styled.a`
  background-image: linear-gradient(0deg, rgb(202, 157, 124) 50%, transparent 50%);
  text-decoration: none;
  color: inherit;
`

const CLink = styled.li`
  padding: 4px;
  padding-left:0;
`

export default Links