import React, { Component } from 'react';
import Title from './title';
import Description from './description';
import Image from './image';

class SimpleCard extends Component {
  render() {
    return (
      <div className="flex items-center border rounded-lg shadow-lg p-4 max-w-md mx-auto bg-white space-x-4">
        <Image url={this.props.imageUrl} alt={this.props.altText} />
        <div>
          <Title text={this.props.title} />
          <Description text={this.props.description} />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
