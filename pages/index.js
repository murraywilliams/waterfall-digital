import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className="title">Breathing new life<br/> into your ideas!</h1>
      <p className="description">
        We've seen it all - from scaling MVP's to well-rounded web applications. Ambitious and driven by huge amounts of commercial experience, gained by working for successful startups and world-class companies.
      </p>
      <div className="hero-cta">
        Get in touch <code>or</code> see why we are a good fit
      </div>
    </div>
    <div className="wrapper">
      <div className="ups">
          <Link href="#">
            <a className="card">
              <h3>A few reasons why we might be the right fit:</h3>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <h3>Latest technology</h3>
              <p>
                Following the hottest trends, we've got the best frameworks on board.
              </p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <h3>Infinite passion</h3>
              <p>We love our jobs, therefore we treat every project like it was our own.</p>
            </a>
          </Link>
        </div>
      <div className="ups">
          <Link href="#">
            <a className="card">
              <h3>Rich experience</h3>
              <p>As the startup veterans, we've seen it all and helped tons of companies grow.</p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <h3>Mutual partnership</h3>
              <p>Always happy to share any kind of business or real life advice.</p>
            </a>
          </Link>
          <Link href="#">
            <a className="card">
              <h3>Attention to schedule</h3>
              <p>Deadline is our religion. Let's ship your MVP before that damn competition!</p>
            </a>
          </Link>
        </div>

      <div className="about">
        <div className="left">
        {/* About image to go here */}
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
        padding: 0 20px;
      text-align: center;
      }
      .hero {
        color: #333;
        height: 85vh;
        background: #E3E3E3;
        padding: 80px 20px 0;
        text-align: center;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 40px;
        line-height: 1.15;
        font-size: 38px;
      }
      .title,
      .description {
        
      }
      .ups {
        max-width: 880px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
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
      .card h3 {
        margin: 0;
        color: darkgrey;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }

      .about {

      }

      .testimonials {

      }

      .portfolio {

      }

      .coffee-cta {

        margin-top: 40px;
      }

      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
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
