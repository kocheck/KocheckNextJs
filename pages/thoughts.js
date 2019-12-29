import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import css from '../styles/main.scss';
import Footer from '../components/footer';
import Hero from '../components/Hero';
// import BlogList from '../components/BlogList';
// import Layout from '../components/Layout';

const Home = () => (
  <div>
    <Head title="🧠 Thoughts" />
    <div className={css.navWrapper}>
      <Nav />
    </div>

    <main>
      {/* Main Hero Props */}
      <Hero
        descriptor="🧠 Thoughts"
        title="A few thoughts written out..."
        subtitle="Collection of thoughts, tutorials and quick tips. This is ment to be my brain dump. If you see somthing that propibly should be fixed feel free to submite a pull reqest"
        CTAlink="/read"
        CTAlabel="👀 Read Latest"
        OTAlink="https://github.com/kocheck"
        OTAlabel="🐛 Submite a PR Request"
      />
      <div>
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
    </main>
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
