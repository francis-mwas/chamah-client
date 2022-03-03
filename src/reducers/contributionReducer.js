import {
  CONTRIBUTION_LIST_REQUEST,
  CONTRIBUTION_LIST_SUCCESS,
  CONTRIBUTION_LIST_FAIL,
  CONTRIBUTION_DETAIL_REQUEST,
  CONTRIBUTION_DETAIL_SUCCESS,
  CONTRIBUTION_DETAIL_FAIL,
  ADD_CONTRIBUTION_REQUEST,
  ADD_CONTRIBUTION_SUCCESS,
  ADD_CONTRIBUTION_FAIL,
} from 'constants/contributionConstants';

export const contributionsInitialState = {
  contributions: [],
};
export const ADD_INI_STATE = {
  errorMessage: '',
  loading: false,
  contribution: {},
};
export const addContribution = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTRIBUTION_REQUEST:
      return {
        loading: true,
      };
    case ADD_CONTRIBUTION_SUCCESS:
      return {
        contribution: action.payload,
        errorMessage: '',
        loading: false,
      };

    case ADD_CONTRIBUTION_FAIL:
      return {
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export const getContributionDetail = (state = {}, action) => {
  switch (action.type) {
    case CONTRIBUTION_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTRIBUTION_DETAIL_SUCCESS:
      return {
        loading: false,
        contribution: action.payload,
      };
    case CONTRIBUTION_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const ContributionsListReducer = (
  state = contributionsInitialState,
  action
) => {
  switch (action.type) {
    case CONTRIBUTION_LIST_REQUEST:
      return {
        loading: true,
        contributions: [],
      };
    case CONTRIBUTION_LIST_SUCCESS:
      return {
        laoding: false,
        contributions: action.payload,
      };
    case CONTRIBUTION_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
