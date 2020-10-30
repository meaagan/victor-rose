import styled from 'styled-components';

export const Art = styled.figure`
max-width: 500px;
height: 100%;

@media (max-width: ${props => props.theme.screen.sm}) {
    display: inline-block;
    margin: 0 auto;
    width: 100%;
}
`;

export const VictorText = styled.div`
width: 100%;
flex-grow: 2;
@media (max-width: ${props => props.theme.screen.sm}) {
    margin:0 auto;
    width:100%;
    margin-bottom: 40px;
}

@media (max-width: ${props => props.theme.screen.lg}) {
    margin-left: 5%;
}
`
export const VicImg = styled.div`
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
@media (max-width: ${props => props.theme.screen.lg}) {
    width:100%;
    height:97%;
    left: 15px;
    top: 17px;
}
`

export const VictorContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items:center;
overflow: visible;

@media (max-width: ${props => props.theme.screen.md}) {
    display: flex;
    flex-direction:column;
    width: 70%;
    margin: 0 auto;
  }
`