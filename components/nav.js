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
      <a>WaterFall Digital</a>
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
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        .util__flex {
          text-align: center;
          padding-top: 40px;
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
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  </div>
)

export default Nav
