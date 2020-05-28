import React, { Component } from "react";
import { connect } from "react-redux";
import { registration, login } from "../actions/wdc";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      fname: "",
      lname: "",
      email: "",
      password: "",
      section: "register",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.data !== this.props.data) {
      if (this.state.section === "register") {
        if (nextProps.data.status === "success") {
          this.changeSection("login");
        }
      } else {
        if (nextProps.data.status === "success") {
          this.props.history.push("/landing");
        }
      }
    }
  };

  changeSection = (section) => {
    section === "login"
      ? this.setState({
          login: true,
          section: section,
          email: "",
          password: "",
          fname: "",
          lname: "",
        })
      : this.setState({
          login: false,
          section: "register",
          email: "",
          password: "",
          fname: "",
          lname: "",
        });
  };

  register = () => {
    const params = {
      firstName: this.state.fname,
      lastName: this.state.lname,
      password: this.state.password,
      email: this.state.email,
    };
    this.props.register(params);
  };

  login = () => {
    const params = {
      password: this.state.password,
      email: this.state.email,
    };

    this.props.login(params);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          paddingLeft: "3%",
          verticalAlign: "middle",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        {!this.state.login && (
          <div style={{ display: "inline-block" }}>
            <h2 style={{ paddingBottom: "2%" }}> Register New Account</h2>
            <table
              style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}
            >
              <tr>
                <td>
                  <label>First Name:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.fname}
                    id="fname"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Last Name:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.lname}
                    id="lname"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email Address:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.email}
                    id="email"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    id="password"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Confirm Password:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input type="password"></input>
                </td>
              </tr>
            </table>
            <button
              type="submit"
              form="nameform"
              value="Submit"
              style={{ margin: "10px 0 5px 0" }}
              onClick={this.register}
            >
              Submit
            </button>
            <div>
              Already Registered?{" "}
              <a href="#" onClick={() => this.changeSection("login")}>
                Click here to login
              </a>
            </div>
          </div>
        )}
        {this.state.login && (
          <div style={{ display: "inline-block" }}>
            <h2 style={{ paddingBottom: "2%" }}> Login</h2>
            <table
              style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}
            >
              <tr>
                <td>
                  <label>Email Address:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.email}
                    id="email"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    id="password"
                  ></input>
                </td>
              </tr>
            </table>
            <button
              type="submit"
              form="nameform"
              value="Submit"
              style={{ margin: "10px 0 5px 0" }}
              onClick={this.login}
            >
              Submit
            </button>
            <div>
              Want An Account?{" "}
              <a href="#" onClick={() => this.changeSection("register")}>
                Click here to Register
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data_collection.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(registration(data)),
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
