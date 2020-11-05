import React from 'react'
import { Trio, TrioContainer } from '@components/global';
import Img from 'gatsby-image'
import styled from 'styled-components'

const Triptych = ( props ) => {
        return(
            <BoxContainer>
                <TrioContainer>
                    <Trio><Img fluid={props.pic1} style={{zIndex:'1'}} /></Trio>
                    <Trio><Img fluid={props.pic2} style={{zIndex:'1'}} /></Trio>
                    <Trio><Img fluid={props.pic3} style={{zIndex:'1'}} /></Trio>
                </TrioContainer>
                <Box></Box>
            </BoxContainer>
        )
}

const Box = styled.div`
    background-color: ${props => props.theme.color.box};
    height: 98%;
    width: 77%;
    display: flex;
    position: absolute;
    left: 149px;
    top: 20px;
    -webkit-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
    -moz-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
    box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);

    @media (max-width: ${props => props.theme.screen.lg}) {
        height: 98%;
        width: 97%;
        display: flex;
        position: absolute;
        left: 30px;
        top: 20px;
    }

    @media (max-width: ${props => props.theme.screen.md}) {
        height: 100%;
        width: 100%;
        display: flex;
        position: absolute;
        left: 10px;
        top: 10px;
    }
`
const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top:50px;
`

export default Triptych