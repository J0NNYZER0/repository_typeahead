import { ACTION } from '../constants/index';
import initialState from './initialState';

export default function reposReducer(state = initialState.repos, action) {
  switch (action.type) {
    case ACTION.SEARCH_REPOS: {
      return [...action.data];
    }

    case ACTION.APPEND_REPO: {
      return [...state, ...action.data];
    }

    case ACTION.GET_SUMMARY: {
      let newState = [...state]
      const summary = newState.filter(el => el.id === parseInt(action.id))
      return [...summary];
    }

    default:
      return state;
  }
}
