import {
  UserState,
  UserActionTypes,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../types";

const initialState: UserState = {
  isRegistering: false,
  data: null,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, isRegistering: true };
    case REGISTER_SUCCESS:
      return { ...state, isRegistering: false, data: action.payload };
    case REGISTER_FAILURE:
      return { ...state, isRegistering: false, error: action.payload };
    default:
      return state;
  }
};
