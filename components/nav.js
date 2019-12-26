import React from 'react';
import Link from 'next/link';
import Logo from '../components/logo'
import css from '../components/nav.scss';

// Add aditional links here
const callToAction = [
  { href: '/about', label: '🎨 View Portfolio' },
  { href: '/contact', label: '🧠 Read Thoughts' },
  { href: '/about', label: '🤔 What’s this? ' },
  { href: '/now', label: '⚡️ Now ' },
].map(callToAction => {
  callToAction.key = `nav-link-${callToAction.href}-${callToAction.label}`;
  return callToAction;
});


const Nav = () => (
  <nav>
      <ul className={css.mainCTA}>
        <li>
          <a className={css.brandingLockup} href="/">
            <Logo />
            <div>Kocheck Portfolio</div>
          </a>
        </li>
        {callToAction.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      {/* ======= */}
    {/* <style jsx>{`
    `}</style> */}
  </nav>
);

export default Nav;
