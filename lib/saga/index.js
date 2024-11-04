import { watchFetchLinkedInData } from "./linkedInSaga";
import { watchLogin } from "./authSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchFetchLinkedInData(),
  ]);
}