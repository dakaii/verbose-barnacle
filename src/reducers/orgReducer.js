import * as types from '../actions/Types';

export const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_ORGANIZATION_REQUEST:
            return {
                ...state,
                organization: action.payload,
                isLoading: true,
            };
        case types.GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload,
                isLoading: false,
            };
        case types.GET_ORGANIZATION_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case types.POST_ORGANIZATION_REQUEST:
            return {
                ...state,
                organization: action.payload,
                isLoading: true,
            };
        case types.POST_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload,
                isLoading: false,
            };
        case types.POST_ORGANIZATION_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
