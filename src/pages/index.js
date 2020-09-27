import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Gallery from '../components/gallery'

export default ({ data }) => (
  <Layout>
    <Gallery posts={data.allInstagramContent} />
  </Layout>
)

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          caption
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
