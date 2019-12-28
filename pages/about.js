import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import css from '../styles/main.scss';
import Footer from '../components/footer';
import Hero from '../components/BlankHero';
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
        descriptor="Warning this site is in constant flux."
        title="Welcome to the playground 👋"
        subtitle="Being a fun weekend hobby for me, I like breaking and putting it back together. Please feel free to reach if you have any questions or follow along."
      />
      <div>
        <h3 className={css.subTitle}>
          This site is built with ❤️ on NEXT js, Heavy lifting hosting 💪 on
          NOW, and flooded 🏝 with content via my 🧠 untill I hook up some sort
          of CMS.
        </h3>
        <p>
          My CSS and JS are a complete mess right now 🐛. Stay tuned for updates
          around that. About me You will quickly find out that I am typically a
          glass half full type of person. I believe that the best output for
          success comes from working my hardest to encourage myself and those
          around me to reach their goals.
        </p>
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
