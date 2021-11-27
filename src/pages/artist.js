import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '@common/Layout';
// import BoxedImage from '@sections/components/boxedimage'
import { Section, Container } from '@components/global';
import { Bio, ArtistImg, Art, Box } from '@sections/artist/style.js'

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
                  Joe was born in Austria and came to Canada at the age of eleven. He studied art at the Museum of Fine Arts and Concordia University in Montreal, followed by a studio apprenticeship.  His freelance career began at the age of nineteen initially working in advertising and editorials, first with Canadian periodicals and newspapers and then branching out into American publications.<br/><br/>
                  After moving to Toronto, Joe taught illustration at Sheridan College for six years where, in exploring the process, students learned to stretch their imaginations.  He continued as an illustrator for many years and although painting and illustrating have similar attributes, he sees them as worlds apart. <br/><br/>
                  Joe creates both abstract and representational works where drawing, color and form are equally as important.  He often draws upon his surroundings for subject matter and is just as stimulated by graffiti as he is by a Rothko or De Kooning painting.<br/>
                  Joe laughs that, “…throughout the painting process, it amazes me how quickly things can go from good to bad or vice versa!”<br/><br/>
                  Joe is also an avid cyclist, a fisherman and fly tier, a gourmand and gracious host, and an expert pool player!
                  </p>
              </Bio>
                            {/* <ArtistImg>
                  <Art><Img fluid={data.artist.childImageSharp.fluid} style={{zIndex:'1'}} /></Art>
                  <Box></Box>
              </ArtistImg> */}
          </Section>
          </Container>
        </Layout>
    )}
  />
);


export default Artist;
