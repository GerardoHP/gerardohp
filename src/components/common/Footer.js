import React from 'react';

class Footer extends React.PureComponent {
  profile = {
    socialMedia: [
      {
        title: 'Follow me on LinkedIn',
        fa: 'linkedin',
        display: true,
        href: 'https://www.linkedin.com/in/gerardohp/'
      },
      {
        title: 'Follow me on Github',
        fa: 'github',
        display: true,
        href: 'https://github.com/gerardohp'
      },
      {
        title: 'Follow me on Stack Overflow',
        fa: 'stack-overflow',
        display: false,
        href:
          'https://stackoverflow.com/users/12305084/gerardo-de-jesus-hernandez-per?tab=profile'
      },
      {
        title: 'Follow me on Twitter',
        fa: 'twitter',
        display: true,
        href: 'https://twitter.com/gerardohp'
      },
      {
        title: 'Follow me on Instagram',
        fa: 'instagram',
        display: true,
        href: 'https://www.instagram.com/gerardojhp87/'
      }
    ]
  };

  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          {this.profile.socialMedia.filter(sm => sm.display).map(sm => (
            <SocialMediaFooterLink key={sm.fa} {...sm} />
          ))}
        </div>
        <div className="h4 title text-center">Gerardo Hern&aacute;ndez</div>
        <div className="text-center text-muted">
          <p>
            &copy; Creative CV. All rights reserved.
            <br />
          </p>
        </div>
      </footer>
    );
  }
}

const SocialMediaFooterLink = ({ href, fa }) => {
  return (
    <a className={`cc-${fa} btn btn-link`} href={href}>
      <i className={`fa fa-${fa} fa-2x`} aria-hidden="true"></i>
    </a>
  );
};

export default Footer;
