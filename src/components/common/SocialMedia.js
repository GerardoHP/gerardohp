import React from 'react';

const profile = {
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

const SocialMedia = () => {
  return (
    <div className="button-container">
      {profile.socialMedia
        .filter(sm => sm.display)
        .map(sm => {
          return (
            <a
              key={sm.fa}
              className="btn btn-default btn-round btn-lg btn-icon"
              href={sm.href}
              rel="tooltip"
              title={sm.title}
            >
              <i className={`fa fa-${sm.fa}`}></i>
            </a>
          );
        })}
    </div>
  );
};

export default SocialMedia;
