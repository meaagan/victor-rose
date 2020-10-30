import styled from 'styled-components';

export const Left = styled.div`
width: 50%;
margin-top: 12px;

@media (max-width: ${props => props.theme.screen.sm}) {
  display: block;
  width: 100%;
  margin: 0 auto;
}
`
export const Right = styled.div`
width: 45%;

@media (max-width: ${props => props.theme.screen.sm}) {
  display: block;
  width: 100%;
  margin: 0 auto;
}
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 5%;
    overflow: hidden;
    margin-top: 12px;

@media (max-width: ${props => props.theme.screen.sm}) {
  display: block;
  width: 90%;
  margin: 0 auto;
}
`