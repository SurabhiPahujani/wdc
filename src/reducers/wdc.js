import { REGISTER_SUCCESS, REGISTER_FAIL } from "../constants";

export default function reducer(
  state = {
    data: null,
    status: null,
  },
  action
) {
  console.log("inside reducer", action.type);
  switch (action.type) {
    case REGISTER_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        status: "success",
      };
      break;
    }
    case REGISTER_FAIL:
      {
        return {
          ...state,
          status: "failed",
        };
        break;
      }
      console.error(`Could not fetch the data from webservice. `); // eslint-disable-line
      break;
  }

  return state;
}
