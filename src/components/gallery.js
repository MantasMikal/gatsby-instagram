import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
`

export default ({ posts }) => (
  <Container className="grid">
    {posts.edges.map(
      (item, i) =>
        item.node.localImage && (
          <Image
            fluid={item.node.localImage.childImageSharp.fluid}
            key={i}
            alt={
              item.node.caption || 'Instagram Post'
            }
          />
        )
    )}
  </Container>
)