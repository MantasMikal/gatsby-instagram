import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Gallery from '../components/gallery'

const IndexPage = ({ data }) => (
  <Layout>
    <Gallery posts={data.allInstagramContent} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          id
          caption
          localImage {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
    }
  }
`