export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface UserState {
  isRegistering: boolean;
  data: UserData | null;
  error: string | null;
}

export interface UserData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: UserData;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserData;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | RegisterUserAction
  | RegisterSuccessAction
  | RegisterFailureAction;
