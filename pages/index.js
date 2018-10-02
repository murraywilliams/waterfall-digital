import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Carousel from 'nuka-carousel'

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <Nav />
      <div className="banner-content">
        <h1 className="title">Breathing new life<br /> into your ideas!</h1>
        <p className="description">
          We've seen it all - from scaling MVP's to well-rounded web applications. Ambitious and driven by huge amounts of commercial experience, gained by working for successful startups and world-class companies.
        </p>
        <div className="hero-cta">
          <Link href="#">
            <button>Get in touch</button>
          </Link>
          <code>or</code>
          <Link href="#">
            <a>see why we're worth it</a>
          </Link>
        </div>
      </div>
    </div>
    <div className="wrapper">
      <div className="ups">
        <Link href="#">
          <a className="card section-heading">
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
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>We've heard things like...</h2>
        <p>"Waterfall Digital are one of the most hard-working devs I've ever worked with, always delivering the best possible results in an incredible short time frame. Mind=blown!"</p>
        <small>Tommy Gun</small>
      </div>

      <div className="portfolio">
        <Carousel
          wrapAround={true}
          withoutControls={true}
        >

          <div className="slide">
            <div className="left">
              <img src="http://placehold.it/300x150/ffffff/c0392b/&text=slide1" />
            </div>
            <div className="right">
              <h3>Reimagining the agile workforce</h3>
              <p>Working closely with VentureWeb, we developed their online presence and shared their expert talent in the global market. Whether you looking to find great candidates or you are a great candidate, VentureWeb can help you find your match!</p>
              <Link href="/">
                <a>View case study</a>
              </Link>
            </div>
          </div>
          <div className="slide">
            <div className="left">
              <img src="http://placehold.it/300x150/ffffff/c0392b/&text=slide2" />
            </div>
            <div className="right">
              <h3>Reimagining the agile workforce</h3>
              <p>Working closely with VentureWeb, we developed their online presence and shared their expert talent in the global market. Whether you looking to find great candidates or you are a great candidate, VentureWeb can help you find your match!</p>
              <Link href="/">
                <a>View case study</a>
              </Link>
            </div>
          </div>

        </Carousel>
      </div>

      <div className="coffee-cta">
        <h2>Read to grab a coffee?</h2>
        <Link href="/">
          <a>Get in touch</a>
        </Link>
      </div>

      <div className="footer">
        <div className="footer-copy">
          Waterfall Digital
          <p>2018, Waterfall Digital</p>
        </div>
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
        background-position: center;
        padding: 10px 5px 0;
        text-align: center;
        margin-bottom: 40px;
      }
      .hero img {
        width: 80px;
      }

      @media screen and (min-width: 768px) {
        .hero {
          height: 75vh;
        }
        .banner-content {
          text-align: left;
          max-width: 460px;
          margin-left: 40px;
          margin-top: 100px;
        }
      }
      @media screen and (min-width: 768px) {
        .hero .header__flex {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
          align-items: center;
        }
      }
      .title {
        margin: 50px 0 0;
        color: white;
        width: 100%;
        padding-top: 4z0px;
        line-height: 1.15;
        font-size: 35px;
        font-weight: 600;
      }
      .description {
        color: white;
        line-height: 28px;
        font-weight: 300;
      }
      @media screen and (min-width: 768px) {
        .title {
          font-size: 48px;
          line-height: 1.3em;
        }
      }
      @media screen and (min-width: 768px) {
        .hero-cta {
          margin-top: 40px;
        }
      }
      .hero-cta button {
        padding: 15px 30px;
        border-radius: 31px;
        border: 2px solid #10DEB2;
        background: #10DEB2;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        margin: 0 10px;
        color: #2A2727;
      }
      .hero-cta button:hover {
        background: none;
        border: 2px solid #10DEB2;
        color: #10DEB2;
        cursor: pointer;
      }
      .hero-cta a {
        font-size: 12px;
        text-decoration: underline;
        color: white;
        margin: 0 10px;
        font-weight: 700;
      }
      .ups {
        max-width: 880px;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans', sans-serif;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
      }
      @media screen and (min-width: 768px) {
        .ups {
          flex-direction: row;
          align-items: flex-start;
        }
      }
      .card {
        padding: 25px;
        width: 220px;
        text-align: center;
        text-decoration: none;
        color: #434343;
        cursor: default;
      }
      @media screen and (min-width: 768px) {
        .card {
          text-align: left;
        }
      }
      .card.section-heading:hover {
        box-shadow: none;
      }
      .card:hover {
        box-shadow: 0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16);
      }
      .card img {
        width: 20px;
      }
      .card h2 {
        margin: 0;
        color: #292929;
        font-size: 26px;
        font-weight: 300;
        line-height: 38px;
      }
      .card h3 {
        font-size: 18px;
        font-weight: 600;
      }
      @media screen and (min-width: 768px) {
        .card h3 {
          font-size: 14px;
        }
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
      @media screen and (min-width: 768px) {
        .about {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
        }
      }
      .about .left img {
        width: 100%;
      }
      @media screen and (min-width: 768px) {
        .about .left img {
          flex: 1;
        }
      }
      .about .right {
        padding: 0 40px;
        text-align: left;
      }
      .about p {
        font-size: 13px;
        line-height: 2.2em;
        font-weight: 300;
      }
      @media screen and (min-width: 768px) {
        .about .left, .about .right {
          flex: 1;
        }
        .about p {
          max-width: 400px;
        }
      }

      .about-cta a {
        padding: 15px 30px;
        border-radius: 31px;
        background: #10DEB2;
        border: none;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        margin: 10px 10px;
        color: #2A2727;
        display: inline-block;
        text-decoration: none;
      }

      .testimonials {
        padding: 40px;
        margin-top: 60px;
        margin-top: 60px;
        background: #10DEB2;
      }
      .testimonials p {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
      }
      .testimonials small {
        color: white;
        font-weight: 800;
        font-style: italic;
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
      .portfolio .slider {
        height: 350px !important;
      }

      .coffee-cta {
        font-family: 'Open Sans',sans-serif;
        font-weight: 800;
        padding: 40px;
        margin-top: 60px;
        background: #f7fafc;
      }
      .coffee-cta h2 {
        margin: 0 0 40px;
      }

      .coffee-cta a {
        padding: 15px 30px;
        border-radius: 31px;
        border: 2px solid #10DEB2;
        background: #10DEB2;
        text-transform: uppercase;
        font-size: 13px;
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
      @media screen and (min-width: 768px) {
        .coffee-cta {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .coffee-cta h2 {
          margin: 0;
        }
      }

      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        line-height: 24px;
        background: #10deb2;
        padding: 20px 0;
        color: white;
      }
      @media screen and (min-width: 768px) {
        .footer {
          flex-direction: row;
          justify-content: space-around;
        }
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
        color: #2A2727;
      }

    `}</style>
  </div >
)

export default Home
