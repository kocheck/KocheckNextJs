import React from 'react';

const Button = props => (
  <>
    <a className={props.state} href={props.link}>
      <div className="buttonStyle">{props.title}</div>
    </a>

    <style jsx>{`
      .isOn > .buttonStyle {
        background-color: var(--label-Primary);
        color: var(--body-background);
      }
      .isOn > .buttonStyle:hover {
        background-color: var(--body-background);
        color: var(--label-Primary);
      }
      //   Is Off =====
      .isOff > .buttonStyle {
        background-color: var(--body-background);
        color: var(--label-Primary);
      }
      .isOff > .buttonStyle:hover {
        color: var(--label-Secondary);
      }

      .buttonStyle {
        display: inline-block;
        border-radius: 0.222222222rem;
        padding: 0.555555556rem 1.333333333rem;
        align-items: center;
        font-weight: bold;
        transition: 0.3s all;
      }
    `}</style>
  </>
);

export default Button;
