import React from 'react';

class Card extends React.PureComponent {
  seeMoreLabel = 'See More';
  render() {
    const { range, header, category, position, description, link, section, bullets, } = this.props;
    return (
      <div className="card">
        <div className="row">
          <div
            className="col-md-3 bg-primary"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="500"
          >
            <div className={`card-body cc-${section}-header`}>
              <p>{range}</p>
              <div className="h5">{header}</div>
            </div>
          </div>
          <div
            className="col-md-9"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="500"
          >
            <div className="card-body">
              <div className="h5">{position}</div>
              {category ? <p className="category">{category}</p> : ''}
              <p>{description}</p>
              {
                bullets ?
                    <div>
                      <p>{bullets.description}</p>
                      <ul>
                        {bullets.list.map((li, i) =>(
                            <li key={i}>{li}</li>
                        ))}
                      </ul>
                    </div>
                    : ''
              }

              {link ? <a href={link}>{this.seeMoreLabel}</a> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
