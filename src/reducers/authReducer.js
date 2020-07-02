import * as types from '../actions/Types';

export const DEFAULT_STATE = {
    access: null,
    refresh: null,
    isLoading: false,
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                auth: action.payload,
                isLoading: true,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isLoading: false,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                auth: action.payload,
                isLoading: true,
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isLoading: false,
            };
        case types.SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case types.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case types.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
