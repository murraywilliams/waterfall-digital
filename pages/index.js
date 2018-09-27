import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <Nav />
      <h1 className="title">Breathing new life<br/> into your ideas!</h1>
      <p className="description">
        We've seen it all - from scaling MVP's to well-rounded web applications. Ambitious and driven by huge amounts of commercial experience, gained by working for successful startups and world-class companies.
      </p>
      <div className="hero-cta">
        <Link>
          <button>Get in touch</button>
        </Link>
        <code>or</code>
        <Link>
          <a>see why we're worth it</a>
        </Link>
      </div>
    </div>
    <div className="wrapper">
      <div className="ups">
          <Link href="#">
            <a className="card">
              <h2>A few reasons why we might be the right fit:</h2>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <img src="/static/hot-air-balloon.png" />
              <h3>Latest technology</h3>
              <p>
                Following the hottest trends, we've got the best frameworks on board.
              </p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <img src="/static/hot-air-balloon.png" />
              <h3>Infinite passion</h3>
              <p>We love our jobs, therefore we treat every project like it was our own.</p>
            </a>
          </Link>
        </div>
      <div className="ups">
          <Link href="#">
            <a className="card">
              <img src="/static/hot-air-balloon.png" />
              <h3>Rich experience</h3>
              <p>As the startup veterans, we've seen it all and helped tons of companies grow.</p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <img src="/static/hot-air-balloon.png" />
              <h3>Mutual partnership</h3>
              <p>Always happy to share any kind of business or real life advice.</p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <img src="/static/hot-air-balloon.png" />
              <h3>Attention to schedule</h3>
              <p>Deadline is our religion. Let's ship your MVP before that damn competition!</p>
            </a>
          </Link>
        </div>

      <div className="about">
        <div className="left">
        <img src="/static/w-image.png" />
        </div>
        <div className="right">
          <h3>But wait... who are Waterfall Digital?</h3>
          <p>Seasoned developers, individuals that stick out, the swank edgy kind&mdash;call us what you want. We are a blend of cultures, backgrounds and skills. We founded WaterfallDigital to provide a new quality in a soiled market. To reset the industry with honesty and curiosity. No cutting corners here.</p>
          <div className="about-cta">
            <Link href="#">
              <a>Read more</a>
            </Link>
            <Link href="#">
              <a>Get in touch</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
          <h2>We've heard things like...</h2>
          <p>"Waterfall Digital are one of the most hard-working devs I've ever worked with, always delivering the best possible results in an incredible short time frame. Mind=blown!"</p>
          <small>Tommy Gun</small>
        </div>

      <div className="portfolio">
        <div className="left">
          {/* portfolio item here */}
        </div>
        <div className="right">
          <h3>Reimagining the agile workforce</h3>
          <p>Working closely with VentureWeb, we developed their online presence and shared their expert talent in the global market. Whether you looking to find great candidates or you are a great candidate, VentureWeb can help you find your match!</p>
          <Link href="/">
            <a>View case study</a>
          </Link>
        </div>

        <div className="coffee-cta">
          <h2>Read to grab a coffee?</h2>
          <Link href="/">
            <a>Get in touch</a>
          </Link>
        </div>
      </div>

      <div className="footer">
        <div className="footer-logo">
          Waterfall Digital
        </div>
        <p>2018, Waterfall Digital</p>
        <ul>
          <li>About us</li>
          <li>Features</li>
          <li>Our work</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>


    <style jsx>{`
      .wrapper {
        text-align: center;
        max-width: 100%;
        font-family: 'Kodchasan', sans-serif;
      }
      .hero {
        color: #333;
        height: 100vh;
        background: url(/static/hero-banner-image.jpg);
        background-size: cover;
        background-position: bottom;
        padding: 10px 5px 0;
        text-align: center;
      }
      .hero img {
        width: 80px;
      }
      .title {
        margin: 20px 0 0;
        color: white;
        width: 100%;
        padding-top: 4z0px;
        line-height: 1.15;
        font-size: 35px;
        font-weight: 800;
      }
      .description {
        color: white;
        line-height: 28px;
        font-weight: 300;
      }

      .hero-cta button {
        padding: 20px;
        border-radius: 25px;
        background: #10DEB2;
        border: none;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 10px;
        color: #2A2727;
      }
      .hero-cta a {
        font-size: 14px;
        text-decoration: underline;
        color: white;
        margin: 0 10px;
        font-weight: 800;
      }
      .ups {
        max-width: 880px;
        margin: 40px auto 0;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans', sans-serif;
        justify-content: space-around;
        align-items: center;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: center;
        text-decoration: none;
        color: #434343;
      }
      .card h2 {
        margin: 0;
        color: #292929;
        font-size: 24px;
        font-weight: 300;
        line-height: 32px;
      }
      .card h3 {
        font-size: 18px;
        font-weight: 600;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        font-weight: 300;
        color: #333;
        line-height: 22px;
      }
      .about {
        margin-top: 40px;
        font-family: 'Open Sans', sans-serif;
      }
      .about .left img {
        width: 100%;
      }
      .about .right {
        padding: 0 20px;
      }
      .about p {
        font-size: 14px;
        line-height: 24px;
        font-weight: 300;
      }

      .testimonials {
        padding: 0 20px;
        margin-top: 60px;
      }
      .testimonials p {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
      }

      .portfolio {
        padding: 0 20px;
        margin-top: 60px;
      }
      .portfolio p {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
      }

      .coffee-cta {
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        padding: 0 20px;
        margin-top: 60px;
      }

      .coffee-cta a {
        padding: 20px;
        border-radius: 31px;
        border: 2px solid #10DEB2;
        background: #10DEB2;
        text-transform: uppercase;
        font-weight: 600;
        display: inline-block;
        color: #2A2727;
        text-decoration: none;
      }
      .coffee-cta a:hover {
        background: white;
        border: 2px solid #10DEB2;
        color: #10DEB2;
      }

      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        line-height: 24px;
        margin-top: 40px;
      }

      .footer p {
        margin: 0;
      }

      .footer ul {
        display: flex;
      }

      .footer li {
        padding: 4px 8px;
        list-style: none;
      }

    `}</style>
  </div>
)

export default Home
