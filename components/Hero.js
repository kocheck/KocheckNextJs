import React from 'react';
import Button from './button';
import css from './hero.scss';

const Hero = props => (
  <div>
    <div className={css.hero}>
      <p className={css.subtitle}>{props.descriptor}</p>
      <h1 className={css.header}>{props.title}</h1>
      <h2 className={css.title}>{props.subtitle}</h2>
      {/* <div className={css.mainCall}>
        <Button link={props.CTAlink} title={props.CTAlabel} state="isOn" />
        <Button link={props.OTAlink} title={props.OTAlabel} state="isOff" />
      </div> */}
    </div>
  </div>
);

export default Hero;
