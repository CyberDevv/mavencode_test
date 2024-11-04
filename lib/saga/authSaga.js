import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../features/userSlice";
import { credentials } from "@/data";

function* loginUser(action) {
  const { username, password } = action.payload;

  try {
    const user = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (user) {
      yield put(loginSuccess({ username: user.name, details: user.details }));
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(loginRequest.type, loginUser);
}
