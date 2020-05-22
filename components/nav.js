import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import css from './nav.scss';

// Add aditional links here
const callToAction = [
  { href: '/about', label: '🤔 What’s this? ' },
  { href: '/now', label: '⚡️ Now ' },
].map(callToAction => {
  callToAction.key = `nav-link-${callToAction.href}-${callToAction.label}`;
  return callToAction;
});

const Nav = () => (
  <nav>
    <ul className={css.mainCTA}>
      <div>
        <li>
          <a className={css.brandingLockup} href="/">
            <Logo />
            <div>Kyle Kochanek</div>
          </a>
        </li>
        {/* <li>
          <a href="/portfolio">
            <div>🎨 View Portfolio</div>
          </a>
        </li>
        <li>
          <a href="/thoughts">
            <div>🧠 Read Thoughts</div>
          </a>
        </li> */}
      </div>
      {/* <div className={css.secCTA}>
        {callToAction.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </div> */}
    </ul>
    {/* ======= */}
    {/* <style jsx>{`
    `}</style> */}
  </nav>
);

export default Nav;
