import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import BoxedImage from '@sections/components/boxedimage'
import { Grid, OrderCarousel, FlipText } from '../style'
import { Link } from 'gatsby'
import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        story: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "happyholidays" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        artist1: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "art2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        artist2: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "art8" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        donation: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "donation" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Fade>
          <Grid inverse>
            <BoxedImage image={data.story.childImageSharp.fluid} />
            <FlipText>
              <h2>Notre Histoire</h2>
              <p>
                Le Bar Espresso Victor Rose est un café de commerce equitable direct géré par le duo mère-fille de Marie & Terry. Un lieu pour rencontrer des amis, ou pour vous procurer votre café matinal en allant travailler!
              </p>
            </FlipText>
          </Grid>
          </Fade>
          <Fade>
          <Grid>
            <FlipText>
            <h2>L'Artiste du Mois</h2>
              <h3>Joe Weissmann</h3>
              <p>« La peinture me permet la liberté d’explorer un chemin sans restriction ou instruction de la part d’un client. Alors que les deux sont des défis créatifs, ils vont dans des directions différentes. Mes illustrations doivent être reliées à un texte et sont souvent limitées en couleur, alors que mes peintures n’ont pas ces restrictions-là. »
<br/>                <Link to='/fr/artist' key='artist'>Read more</Link></p>
            </FlipText>
            <BoxedImage image={data.artist1.childImageSharp.fluid} />
          </Grid>
          </Fade>
          <Fade>
            <Grid inverse>
              <BoxedImage image={data.donation.childImageSharp.fluid} />
              <FlipText>
                <h2>MOI Collection Box</h2>
                <p>La Mission de l’Ouest de l’Île est un organisme sans but lucratif qui apporte une aide alimentaire en offrant des aliments bien équilibrés de haute qualité et de l’aide connexe aux résidents en difficulté de l’Ouest de l’Île de Montréal. Nous allons collecter de façon permanente pour cette organisation.</p>
              </FlipText>
            </Grid>
          </Fade>
        </Container>
      </Section>
    )}
  />
);

export default About