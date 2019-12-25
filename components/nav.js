import React from 'react';
import Link from 'next/link';
import Logo from '../components/logo'
import css from '../components/nav.scss';

// Add aditional links here
const callToAction = [
  { href: '/about', label: '🎨 View Portfolio' },
  { href: '/contact', label: '🧠 Read Thoughts' },
].map(callToAction => {
  callToAction.key = `nav-link-${callToAction.href}-${callToAction.label}`;
  return callToAction;
});
const links = [
  { href: '/about', label: '🤔 What’s this? ' },
  { href: '/contact', label: '📱 Contact ' },
  { href: '/now', label: '⚡️ Now ' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
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
    <ul className={css.secondary}>
      <li>
        <Link href="/">
          <a>🏡 Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    {/* <style jsx>{`
    `}</style> */}
  </nav>
);

export default Nav;
