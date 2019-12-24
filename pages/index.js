import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import css from '../styles/main.scss';
import Footer from '../components/footer';
// import BlogList from '../components/BlogList';
// import Layout from '../components/Layout';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className={css.header}>
        Kyle is a new dad, product designer, front-end developer, and a
        voracious learner.
      </h1>
      <h2 className={css.title}>
        Currently the senior product designer, at Roadtrippers 🗺. Freelance
        designer and coffee nerd. Feel free to reach out! Lets talk about
        pixels, maps, or coffee ✌️
      </h2>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#setup">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on GitHub and in their examples.</p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js/tree/master/examples">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </Link>
      </div>
    </div>
    <Footer />
    {/* <div>
        <p>
          © {date ? <span>{date.date}</span> : <span className="loading" />},
          Kyle Kochanek. Site deployed on <a href="https://zeit.co/">NOW</a> &
          font provided by <a href="https://github.com/rsms/inter">Inter</a>
        </p>
      </div> */}
  </div>
);

export default Home;
