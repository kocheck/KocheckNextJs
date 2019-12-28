import React from 'react';
import css from './hero.scss';

const Hero = props => (
  <div>
    <div className={css.Blankhero}>
      <p className={css.subtitle}>{props.descriptor}</p>
      <h1 className={css.header}>{props.title}</h1>
      <h2 className={css.title}>{props.subtitle}</h2>
    </div>
  </div>
);

export default Hero;
