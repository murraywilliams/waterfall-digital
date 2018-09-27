import React from 'react'
import Link from 'next/link'

const links = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About us' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'Our work' },
  { href: '#', label: 'Contact us' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <div className="util__flex">
    <Link href="/">
      <a><img style={{width: '80px'}} src="/static/logo-final.png" /></a>
    </Link>
    <nav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }
        .util__flex {
          text-align: center;
          padding-top: 40px;
        }
        @media screen and (min-width: 768px) {
          .util__flex {
            flex-direction: row;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 40px;
          }
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: center;
        }
        nav > ul {
          padding: 4px 16px;
          margin: 0;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #2A2727;
          text-decoration: none;
          font-size: 12px;
        }
        a:hover {
          color: #10DEB2;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  </div>
)

export default Nav
