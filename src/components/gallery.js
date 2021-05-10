import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Gallery = ({ posts }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }}>
      {posts.edges.map(
        item =>
          item.node.localImage && (
            <GatsbyImage
              image={item.node.localImage.childImageSharp.gatsbyImageData}
              key={item.node.id}
              alt={
                item.node.caption || 'Instagram Post'
              }
            />
          )
      )}
    </div>
  )
}

export default Gallery