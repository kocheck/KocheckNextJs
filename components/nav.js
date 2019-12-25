import React from 'react';
import Link from 'next/link';

// Add aditional links here
const callToAction = [
  { href: '/about', label: '🤔 What’s this?' },
  { href: '/contact', label: '📱 Contact' },
  { href: '/now', label: '⚡️ Now' },
].map(callToAction => {
  callToAction.key = `nav-link-${callToAction.href}-${callToAction.label}`;
  return callToAction;
});
const links = [
  { href: '/about', label: '🤔 What’s this?' },
  { href: '/contact', label: '📱 Contact' },
  { href: '/now', label: '⚡️ Now' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/">
          <image className="nav-logo" scr="/static/branding/logoIcon.png"></image>
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
    <ul>
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
      :global(body) {
        margin: 0;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
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
    `}</style> */}
  </nav>
);

export default Nav;
