import React, { Component } from "react";
import { Link } from "react-dom";

export class Header extends Component {
  render() {
    const header_banner = (
      <div id="header__banner">
        <a>KIRSH 20SS SEASON OFF SALE UP TO 50% OFF</a>
      </div>
    );
    const logo = <a>KIRSH</a>;
    const buttons = (
      <div id="header__menus">
        <strong>
          <a>KIRSH POCKET</a>
        </strong>
        <strong>
          <a>KIRSH BLENDING</a>
        </strong>
        <strong>
          <a>KIRSH LINE</a>
        </strong>
        <a>KIRSH NEW</a>
        <a>KIRSH SHOP</a>
        <a>KIRSH LOOKBOOK</a>
        <a>KIRSH SALE</a>
        <a>KIRSH OFFLINE STORE</a>
        <a>KIRSH INFO</a>
        <a className="smile"></a>
        <a className="cart"></a>
        <a className="search"></a>
      </div>
    );

    return (
      <div id="header">
        <div className="header__banner">{header_banner} </div>
        <div className="header__cover">
          <span className="logo__area">{logo} </span>
          <span className="menu__area">
            <div className="button__area">{buttons}</div>
          </span>
        </div>
      </div>
    );
  }
}
