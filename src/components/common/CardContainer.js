import React from 'react';
import Card from './Card';

class CardContainer extends React.PureComponent {
  render() {
    const { section, title, cards } = this.props;
    return (
      <div className="section" id={section}>
        <div className={`container cc-${section}`}>
          <div className="h4 text-center mb-4 title">{title}</div>
          {cards.map(card => (
            <Card key={card.header} {...card} section={section} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
