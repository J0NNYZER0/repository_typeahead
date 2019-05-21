import { ACTION } from '../constants/index';
import initialState from './initialState';

export default function reposReducer(state = initialState.site, action) {
  switch (action.type) {
    case ACTION.IS_LOADING: {
      return { ...state, isLoading: action.isLoaded };
    }

    default:
      return state;
  }
}
