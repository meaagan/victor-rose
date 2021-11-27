import styled from 'styled-components';

export const Bio = styled.div`
width: 100%;
flex-grow: 2;
@media (max-width: ${props => props.theme.screen.sm}) {
    margin:0 auto;
    width:100%;
    margin-bottom: 40px;
    padding: 1rem;
}
`
export const ArtistImg = styled.div`
position: relative;
width: 100%;
@media (max-width: ${props => props.theme.screen.md}) {
    order:2;
}
`

export const Box = styled.div`
background-color: ${props => props.theme.color.box};
height: 95%;
width: 86%;
position: absolute;
left: 15px;
top: 32px;
-webkit-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
-moz-box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);
box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.69);

@media (max-width: ${props => props.theme.screen.lg}) {
    width:100%;
    height:97%;
    left: 15px;
    top: 17px;
}
`