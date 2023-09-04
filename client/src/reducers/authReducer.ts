import { Reducer } from "redux";
import { AuthAction, AuthState } from "../interfaces/actions";

const initialState = {
  user: null,
  token: null,
} satisfies AuthState;

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState,action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
