import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchLinkedInDataRequest,
  fetchLinkedInDataSuccess,
  fetchLinkedInDataFailure
} from '../features/linkedInSlice';
import api from '../api';

function* fetchLinkedInDataSaga(action) {
  try {
    const response = yield call(api.fetchLinkedInData, action.payload);
    yield put(fetchLinkedInDataSuccess(response.data));
  } catch (error) {
    yield put(fetchLinkedInDataFailure(error.message));
  }
}

export function* watchFetchLinkedInData() {
  yield takeLatest(fetchLinkedInDataRequest.type, fetchLinkedInDataSaga);
}