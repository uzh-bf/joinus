import React from 'react'
import Link from 'next/link'

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props) {
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link href="/">
            <a
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </a>
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Header
