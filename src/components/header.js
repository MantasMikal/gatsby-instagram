import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      color: 'rebeccapurple',
      textTransform: 'uppercase',
      fontWeight: '700'
    }}
  >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            marginLeft: '1rem'
          }}>
          {siteTitle}
        </Link>
  </div>
)

export default Header
