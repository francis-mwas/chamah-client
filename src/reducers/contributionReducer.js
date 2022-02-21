import {
  CONTRIBUTION_LIST_REQUEST,
  CONTRIBUTION_LIST_SUCCESS,
  CONTRIBUTION_LIST_FAIL,
} from 'constants/contributionConstants';

export const contributionsInitialState = {
  contributions: [],
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
