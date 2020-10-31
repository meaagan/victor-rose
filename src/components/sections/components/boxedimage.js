import React from 'react'
import Img from 'gatsby-image'

import { Art, BoxContainer, Box } from '@sections/style'


const BoxedImage = ( props ) => {
    return (
        <BoxContainer>
            <Art><Img fluid={props.image} style={{zIndex:'1'}} /></Art>
            <Box></Box>
        </BoxContainer>
    )
}

export default BoxedImage