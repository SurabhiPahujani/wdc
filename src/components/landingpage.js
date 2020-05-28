import React, { Component } from "react";
import { ReactTinyLink } from "react-tiny-link";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputs: ["input-0"] };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://guteurls.de/guteurls.js";
    script.async = true;
    script.selector = ".myP";
    script.type = "text/jsx";

    document.body.appendChild(script);
  }
  handleSpanClick = (e) => {
    console.log("It works!");
    document.getElementById("search").append(`<input
    type="text"
    placeholder="Enter Website: www.google.com"
    style={{
      width: "85%",
      height: "40px",
      paddingLeft: "5px",

      border: "1px solid lightgray",
      borderRadius: "2px",
    }}
  ></input>
  <button
    style={{
      height: "45px",
      width: "11%",
      border: "2px solid #FFC000",
      backgroundColor: "#FFC000",
      borderRadius: "2px",
      color: "white",
    }}
  >
    GO
  </button>{" "}`);
  };
  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState((prevState) => ({
      inputs: prevState.inputs.concat([newInput]),
    }));
  }
  render() {
    return (
      <div
        style={{ backgroundColor: "white", height: "100%", paddingLeft: "3%" }}
      >
        <h2 style={{ paddingBottom: "2%" }}> Landing Page</h2>
        <div style={{ marginBottom: "10px" }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.appendInput()}
          >
            Click To Add More Links
          </span>
          <div id="dynamicInput">
            {this.state.inputs.map((input) => (
              <div style={{ marginBottom: "5px" }}>
                {" "}
                <input
                  type="text"
                  key={input}
                  placeholder="Enter Website: www.google.com"
                  style={{
                    width: "85%",
                    height: "40px",
                    paddingLeft: "5px",

                    border: "1px solid lightgray",
                    borderRadius: "2px",
                  }}
                ></input>
                <button
                  key={input}
                  style={{
                    height: "45px",
                    width: "11%",
                    border: "2px solid #FFC000",
                    backgroundColor: "#FFC000",
                    borderRadius: "2px",
                    color: "white",
                  }}
                >
                  GO
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* <input
          type="text"
          style={{
            width: '97%',
            height: '50%',
            paddingLeft: '5px',
            border: '1px solid lightgray',
            marginBottom: '10px',
            borderRadius: '4px',
          }}
        > */}
        {/* <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.facebook.com/surabhi.pahujani"
        />
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.google.com"
        />
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.facebook.com"
        /> */}
        {/* </input> */}
        <div className="myP">
          {" "}
          <a href="https://www.google.com/">Link</a>
        </div>
        <script
          type="text/jsx"
          src="https://guteurls.de/guteurls.js"
          async
          selector=".myP"
        />
        <div>
          <label style={{ fontWeight: "normal", color: "#FFC000" }}>
            Send notifications to
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="me@example.com"
            style={{
              width: "85%",
              height: "40px",
              paddingLeft: "5px",
              border: "1px solid lightgray",
              borderRadius: "2px",
            }}
          ></input>
          <select
            name="options"
            id="options"
            style={{
              height: "45px",
              width: "12%",
              border: "1px solid #FFC000",
              borderRadius: "2px",
            }}
          >
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="early">Yearly</option>
          </select>
        </div>
      </div>
    );
  }
}

export default LandingPage;
