import React, { Component } from "react";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  const;

  render() {
    return (
      <div id="footer">
        <div className="footer__menus">
          <a>MY PAGE</a>
          <a>SHOPPING GUIDE</a>
          <a>ORDER</a>
          <a>KIRSH GIR</a>
          <a>STOCKIST</a>
          <a className="end">PRESS</a>
        </div>

        <div className="logo__img" />
        <div className="logo">KIRSH</div>
        <br />
        <ul className="company__info">
          <li>
            <p>5F ,127, Seongsui-ro, Seongdong-gu, Seoul, Republic of Korea</p>
            <p>
              License 284-81-00849 tae-young Hu / Network License
              2019-서울성동-992
            </p>
            <p>contact kirsh.official@gmail.com (+82) 070-8801-5967</p>
            <br />
            <p>©2018 kirsh All Right Reserved</p>
          </li>
          <br />
          <br />
          <br />
          <li>
            <a>Term of Use</a>
            <a>PrivacyPolicy</a>
            <a>Facebook</a>
            <a>Instagram</a>
          </li>
        </ul>
      </div>
    );
  }
}
