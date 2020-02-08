import React from 'react';

const links = [
  { id: 'about', text: 'About' },
  { id: 'skill', text: 'Skills' },
  { id: 'portfolio', text: 'Portfolio' },
  { id: 'experience', text: 'Experience' },
  { id: 'contact', text: 'Contact' }
]

const Header = () => {
  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
          color-on-scroll="400"
        >
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="/" rel="tooltip">
                GerardoHP
                </a>
              <button
                className="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="navbar-nav">
                {links.map(l => {
                  return (<li key={l.id} className="nav-item">
                    <a className="nav-link smooth-scroll" href={`#${l.id}`}>
                      {l.text}
                    </a>
                  </li>)
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;