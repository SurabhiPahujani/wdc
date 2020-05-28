import React, { Component } from "react";
import "../../src/App.css";
import { Container, Row, Col } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    const products = [
      "www.google.com",
      "www.facebook.com",
      "www.insta.com",
      "www.flipkart.com",
      "www.google.com",
      "www.facebook.com",
      "www.insta.com",
      "www.flipkart.com",
    ];
    let rowContents = [];
    const contents = products.reduce((acc, p, i) => {
      rowContents.push(
        <div key={i} className="col col-md-3">
          {p}
        </div>
      );
      if (i % 3 === 4) {
        acc.push(<div className="row">{rowContents}</div>);
        rowContents = [];
      }
      return acc;
    }, []);
    contents.push(<div className="row">{rowContents}</div>);
    return (
      <div
        style={{ backgroundColor: "white", height: "100%", paddingLeft: "3%" }}
      >
        <h2 style={{ paddingBottom: "2%" }}> List Page</h2>
        <div className="list">{contents}</div>
      </div>
    );
  }
}

export default LandingPage;
