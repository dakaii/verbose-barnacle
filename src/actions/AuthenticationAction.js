import * as types from './Types';

export const loginRequest = (params) => ({
    type: types.LOGIN_REQUEST,
    params,
});

export const signupRequest = (params) => ({
    type: types.SIGNUP_REQUEST,
    params,
});

export const resetPasswordRequest = (params) => ({
    type: types.RESET_PASSWORD_REQUEST,
    params,
});
