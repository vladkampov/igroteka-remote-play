import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class Card extends Component {
  onCardClick = e => {
    e.preventDefault();
  }

  render() {
    const { name, avalaible, image_url: img } = this.props;
    return (
      <div className={`Card ${avalaible || 'innactive'}`}>
        <a href="" className="Link" onClick={this.onCardClick}>
          <Image src={img} responsive />
          <div className="info-bar">
            {name}
          </div>
        </a>
      </div>
    )
  }
}