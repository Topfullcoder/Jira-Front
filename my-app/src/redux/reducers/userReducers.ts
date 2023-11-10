import {
  UserActionTypes,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UserData,
} from "../actions/userActions";

// Define the initial state and its type
interface UserState {
  isRegistering: boolean;
  userData: UserData | null;
  error: string | null;
}

const initialState: UserState = {
  isRegistering: false,
  userData: null,
  error: null,
};

// The reducer function
const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true,
        error: null, // Reset errors on a new register request
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        userData: action.payload, // Store the user data on success
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload, // Store the error message on failure
      };
    default:
      return state; // Return the unchanged state for any unknown actions
  }
};

export default userReducer;
