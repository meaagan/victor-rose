import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import './StyledCarousel.css'

const Coworking = ( props ) => {
    return (
        <BoxContainer>
            <Carousel indicators={false} style={{zIndex:'1'}} >
                {props.children}
            </Carousel>
            <Box></Box>
        </BoxContainer>
    )
}

const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    @media (max-width: ${props => props.theme.screen.md}) {
        order: 2;
        width:90%;
    }
`

const Box = styled.div`
    background-color: ${props => props.theme.color.box};
    height: 100%;
    width: 100%;
    position: absolute;
    left: 15px;
    top: 15px;
`

export default Coworking;

