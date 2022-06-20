import React from 'react';

const profile = {
  portfolioLabel: 'Portfolio',
  sections: [
    {
      category: 'web-development',
      fa: 'fa-laptop',
      projects: [
        {
          img: 'images/project-1.jpg',
          title: 'Recent Project',
          subtitle: 'Web Development'
        },
        {
          img: 'images/project-2.jpg',
          title: 'Startup Project',
          subtitle: 'Web Development'
        },
        {
          img: 'images/project-4.jpg',
          title: 'Startup Project',
          subtitle: 'Mobile Development'
        }
      ]
    },
    {
      category: 'mobile-development',
      fa: 'fa-mobile',
      projects: [
        {
          img: 'images/project-3.jpg',
          title: 'Recent Project',
          subtitle: 'Mobile Development'
        },
        {
          img: 'images/project-4.jpg',
          title: 'Startup Project',
          subtitle: 'Mobile Development'
        }
      ]
    }
  ]
};

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">
              {profile.portfolioLabel}
            </div>
            <PortfolioNav />
          </div>
        </div>
        <PortfolioGallery />
      </div>
    </div>
  );
};

const PortfolioGallery = () => {
  return (
    <div className="tab-content gallery mt-5">
      {profile.sections.map((section, index) => (
        <GalleryPane key={index} {...section} active={index === 0} />
      ))}
    </div>
  );
};

const GalleryPane = ({ category, projects, active }) => {
  let columns = { column1: [], column2: [] };
  projects.forEach((project, index) => {
    if (index % 2 === 0) {
      columns.column1.push(project);
    } else {
      columns.column2.push(project);
    }
  });

  return (
    <div className={`tab-pane${active ? ' active' : ''}`} id={category}>
      <div className="ml-auto mr-auto">
        <div className="row">
          {Object.values(columns).map((column, index) => (
            <Columns key={index} projects={column} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Columns = ({ projects, category }) => {
  return (
    <div className="col-md-6">
      {projects.map((project, index) => (
        <PortfolioImg key={index} category={category} {...project} />
      ))}
    </div>
  );
};

const PortfolioImg = ({ img, title, subtitle, category }) => {
  return (
    <div
      className="cc-porfolio-image img-raised"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <a href={`#${category}`}>
        <figure className="cc-effect">
          <img src={img} alt="Image" />
          <figcaption>
            <div className="h4">{title}</div>
            <p>{subtitle}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

const PortfolioNav = () => {
  return (
    <div className="nav-align-center">
      <ul className="nav nav-pills nav-pills-primary" role="tablist">
        {profile.sections.map((section, index) => (
          <MenuItem key={section.category} {...section} active={index === 0} />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ category, fa, active }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link${active ? ' active' : ''}`}
        data-toggle="tab"
        href={`#${category}`}
        role="tablist"
      >
        <i className={`fa ${fa}`} aria-hidden="true"></i>
      </a>
    </li>
  );
};

export default Portfolio;
