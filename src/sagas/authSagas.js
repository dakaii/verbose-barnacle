import { put, takeLatest } from 'redux-saga/effects';
import { config } from '../constants/Constants';
import * as types from '../actions/Types';

function* requestLogIn(action) {
    const url = `${config.API_URL}/api/jwt/create/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 200) {
        const payload = yield response.json();
        localStorage.setItem('access', payload['access']);
        localStorage.setItem('refresh', payload['refresh']);
        yield put({ type: types.LOGIN_SUCCESS, payload: payload });
    } else {
        yield put({ type: types.LOGIN_FAILURE });
    }
}

function* requestSignup(action) {
    const url = `${config.API_URL}/api/signup/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 201) {
        const payload = yield response.json();
        localStorage.setItem('access', payload['access']);
        localStorage.setItem('refresh', payload['refresh']);
        yield put({ type: types.SIGNUP_SUCCESS, payload: payload });
    } else if (response && response.status === 400) {
        const payload = yield response.json();
        yield put({
            type: types.SIGNUP_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({ type: types.SIGNUP_FAILURE });
    }
}

function* requestPasswordReset(action) {
    // FIXME It's not working
    // TODO implement the password reset confirm view. 
    const url = `${config.API_URL}/api/users/reset_password/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 204) {
        const payload = yield response.json();
        yield put({ type: types.RESET_PASSWORD_SUCCESS, payload: payload });
    } else {
        yield put({ type: types.RESET_PASSWORD_FAILURE });
    }
}

export default function* () {
    yield takeLatest(types.LOGIN_REQUEST, requestLogIn);
    yield takeLatest(types.SIGNUP_REQUEST, requestSignup);
    yield takeLatest(types.RESET_PASSWORD_REQUEST, requestPasswordReset);
}
