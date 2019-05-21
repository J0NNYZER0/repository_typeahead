'use strict';
import * as api from '../apis/repos';
import { ACTION } from '../constants/index';

const isLoading = isLoaded => ({
  type: ACTION.IS_LOADING, isLoaded
});

const success = data => ({
  type: ACTION.SEARCH_REPOS, data,
});

const appendRepo = data => ({
  type: ACTION.APPEND_REPO, data,
});

const getSummary = id => dispatch => dispatch({
  type: ACTION.GET_SUMMARY, id,
});

const searchAllRepos = data => dispatch => api.searchAllRepos(data)
.then(response => {
  dispatch(success(response.items));
  dispatch(isLoading(false));
}).catch((error) => {
  throw (error);
});

const searchLimitedRepos = data => dispatch => api.searchLimitedRepos(data)
.then(response => {
  dispatch(success(response.items));
  dispatch(isLoading(false));
}).catch((error) => {
  throw (error);
});

const searchPaginatedRepos = (q,page) => dispatch => api.searchPaginatedRepos(q,page)
.then(response => {
  dispatch(appendRepo(response.items));
  dispatch(isLoading(false));
}).catch((error) => {
  throw (error);
});

export {
  getSummary,
  isLoading,
  searchAllRepos,
  searchLimitedRepos,
  searchPaginatedRepos
}
