import React, { Component } from "react";
import "./MenuItem.css";

export default class MenuItem extends Component {
  render() {
    const { title, price, img, desc } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}
