import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '@common/Layout.fr';
import BoxedImage from '@sections/components/boxedimage'
import { Section, Container } from '@components/global';
import { Bio, ArtistImg, ArtistContainer, Art, Box } from '@sections/artist/style.js'

const Artist = () => (
  <StaticQuery
    query={graphql`
      query {

        artist: file(
          sourceInstanceName: { eq: "homepage" }
          name: { eq: "happyholidays" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `}
    render={data => (
        <Layout>
          <Container>
            <Section>
                <Bio style={{textAlign: 'justify'}}>
                    <h2>Joe Weissmann</h2>
                    <p>
                    Joe est né en Autriche et est arrivé au Canada à onze ans. Il a étudié l’art au Musée des Beaux-Arts et à l’Université Concordia à Montréal et a ensuite été apprenti dans un studio. Sa carrière indépendante a commencé à 19 ans, lorsqu’il travaillait au début dans la publicité et les éditoriaux, d’abord pour des journaux et des périodiques canadiens, et ensuite en se ramifiant vers les publications américaines.
<br/><br/>
Après avoir déménagé à Toronto, Joe a enseigné l’illustration au Sheridan College pendant six ans, où, en explorant la démarche, les étudiants apprenaient à faire preuve d’imagination. Il a continué en tant qu’illustrateur durant plusieurs années et, bien que la peinture et l’illustration ont plusieurs points communs, il les considère comme étant deux mondes séparés. 
<br/><br/>
Joe crée à la fois des œuvres abstraites et figuratives où le dessin, la couleur, et la forme sont tout aussi importants. Il s’inspire souvent de son milieu pour trouver des sujets et est tout aussi stimulé par des graffitis, que par une peinture de Rothko ou de De Kooning.
<br/><br/>
Joe ri en pensant « …à travers ce processus de peinture, ça me fascine de voir à quelle vitesse les choses peuvent passer de bonnes à mauvaises et vice versa! » 
<br/><br/>
Joe est aussi un mordu de cyclisme, un pêcheur et pêcheur à la mouche, un gourmand, un hôte bienveillant et un joueur de billard expert! 
                    </p>
                </Bio>
                            <ArtistImg>
                  {/* <Art><Img fluid={data.artist.childImageSharp.fluid} /></Art>
                  <Box></Box> */}
              </ArtistImg>
                </Section>
            </Container>
        </Layout>
    )}
  />
);


export default Artist;
