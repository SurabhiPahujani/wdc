import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../constants";

export const registration = (data) => (dispatch) => {
  console.log("inside action");

  return axios
    .post("http://138.68.5.224:5000/auth/api/users", data)
    .then((response) => {
      console.log("success", response.data);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({ type: REGISTER_FAIL, payload: err }); // Error handling
    });
};

export const login = (data) => (dispatch) => {
  console.log("inside action", data);
  return axios
    .post("http://138.68.5.224:5000/auth/api/login", data)
    .then((response) => {
      console.log("success", response);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({ type: REGISTER_FAIL, payload: err }); // Error handling
    });
};

export const showHistory = (data) => (dispatch) => {
  console.log("inside action");
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTA3NjI2MjIsImlhdCI6MTU5MDY3NjIyMiwic3ViIjoxfQ.OoVnf4-Ijw7LYLScj2pUPdXPr-udihHZeCLgXo8q8yY",
  };
  return axios
    .post("http://138.68.5.224:5000/auth/api/difference", data, {
      headers: headers,
    })
    .then((response) => {
      console.log("success", response.data);
      //   dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log("error", err);
      //  dispatch({ type: REGISTER_FAIL, payload: err }); // Error handling
    });
};
