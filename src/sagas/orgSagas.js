import { put, takeLatest } from 'redux-saga/effects';
import { config } from '../constants/Constants';
import * as types from '../actions/Types';

function* getOrganization(action) {
    const url = `${config.API_URL}/api/business/organizations/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 200) {
        const payload = yield response.json();
        yield put({ type: types.GET_ORGANIZATION_SUCCESS, payload: payload });
    } else if (response && response.status === 400) {
        const payload = yield response.json();
        yield put({
            type: types.GET_ORGANIZATION_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({ type: types.GET_ORGANIZATION_FAILURE });
    }
}

function* postOrganization(action) {
    const url = `${config.API_URL}/api/business/organizations/`;
    let response = null;
    try {
        response = yield fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(action.params),
        });
    } catch (error) {
        console.log(error);
    }
    if (response && response.status === 201) {
        const payload = yield response.json();
        yield put({ type: types.POST_ORGANIZATION_SUCCESS, payload: payload });
    } else if (response && response.status === 400) {
        const payload = yield response.json();
        yield put({
            type: types.POST_ORGANIZATION_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({ type: types.POST_ORGANIZATION_FAILURE });
    }
}

export default function* () {
    yield takeLatest(types.GET_ORGANIZATION_REQUEST, getOrganization);
    yield takeLatest(types.POST_ORGANIZATION_REQUEST, postOrganization);
}
