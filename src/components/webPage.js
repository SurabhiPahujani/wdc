import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { showHistory, registration } from "../actions/wdc";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from "react-daterange-picker";

import moment from "moment-range";

class WebPage extends Component {
  state = {
    fromDate: "",
    toDate: "",
  };

  componentDidMount() {
    const params = {
      fromDate: "2020-05-20",
      toDate: "2020-05-22",
      id: 12345,
    };
    this.props.checkHistory(params);
  }

  handleFromChange = (date) => {
    this.setState({
      fromDate: date,
    });
  };

  handleToChange = (date) => {
    this.setState({
      toDate: date,
    });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: "white", height: "100%", paddingLeft: "3%" }}
      >
        <h2 style={{ paddingBottom: "2%" }}> Web Page</h2>
        <div style={{ display: "flex" }}>
          {" "}
          <div style={{ margin: "10px" }}>Select date for comparison</div>
          <div style={{ margin: "10px" }}>
            {" "}
            From :
            {/* <DateRangePicker
              numberOfCalendars={2}
              selectionType="range"
              minimumDate={new Date()}
            /> */}
          </div>
        </div>
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
    checkHistory: (data) => dispatch(showHistory(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebPage);
