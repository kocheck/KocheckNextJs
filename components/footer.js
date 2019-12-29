import React, { useEffect, useState } from 'react';
import css from './footer.scss';

const Footer = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('../api/date');
      const newDate = await res.json();

      setDate(newDate);
    }
    getDate();
  }, [setDate]);

  return (
    <div className={css.footer}>
      <p>
        © {date ? <span>{date.date}</span> : <span className="loading" />}, Kyle
        Kochanek. Site deployed on <a href="https://zeit.co/">NOW</a> & font
        provided by <a href="https://github.com/rsms/inter">Inter</a>
      </p>
    </div>
  );
};

export default Footer;
