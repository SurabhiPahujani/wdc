import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./registration";
import LandingPage from "./landingpage";
import ListPage from "./listPage";
import WebPage from "./webPage";
import "../../src/App.css";

class ContainerWrapper extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <Router>
        <div id="header-wrapper">
          <div id="header" class="container">
            <div id="logo">
              <h1>
                <a href="#">Web-Data-Collection</a>
              </h1>
            </div>
            <div id="triangle-up"></div>
          </div>
        </div>
        <div id="menu-wrapper">
          <div id="menu">
            <ul>
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Sign In/Sign Up{" "}
                </Link>
              </li>
              <li>
                <Link to={"/landing"} className="nav-link">
                  Landing
                </Link>
              </li>
              <li>
                <Link to={"/list"} className="nav-link">
                  List
                </Link>
              </li>
              <li>
                <Link to={"/web"} className="nav-link">
                  Web Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/register" component={Registration} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/web" component={WebPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.posts);
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch({ type: "GET_POST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerWrapper);
