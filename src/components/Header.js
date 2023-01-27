import React from 'react';

const Header = (props) => (
  <header className="c-header">
    <div className="l-content-wrap">
      <div className="c-header__content">
        <h1 className="c-header__title">{props.title}</h1>
        <p className="c-header__subtitle">{props.subtitle}</p>
      </div>
    </div>
  </header>
);

export default Header;