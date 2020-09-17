import React, { Component } from "react";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.id = props.id;
    this.active = props.active;
  }
  render() {
    return (
      <a
        class={`list-group-item list-group-item-action ${this.active}`}
        id={`productlist${this.name}`}
        data-toggle="list"
        href={`#product${this.id}`}
        role="tab"
        aria-controls={`product${this.name}`}
      >
        {this.name}
      </a>
    );
  }
}

export default ProductsList;
