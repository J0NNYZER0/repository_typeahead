'use strict';
import fetch from 'isomorphic-fetch';
import reposData from '../mockData/repo.json';
import * as constants from '../constants/index';

const searchMockRepo = (delay = 1000) => {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(reposData);
    }, delay);
  }));
}

async function searchAllRepos(q) {
  return new Promise((resolve, reject) => {
    fetch(
      encodeURI(`${constants.HOST}${constants.URI.SEARCH_REPOS}?q=${q}`), {
      headers: { Accept: constants.HEADER.MERCY_PREVIEW },
      method: 'GET'
    })
    .then(response => {
      resolve(response.json())})
    .catch(err => reject(err))
  });
}

async function searchLimitedRepos(data) {
  return new Promise((resolve, reject) => {
    fetch(
      encodeURI(`${constants.HOST}${constants.URI.SEARCH_REPOS}?q=${data}&page=1&per_page=10`), {
      headers: { Accept: constants.HEADER.MERCY_PREVIEW },
      method: 'GET'
    })
    .then(response => {
      resolve(response.json())})
    .catch(err => reject(err))
  });
}

async function searchPaginatedRepos(q,page) {
  console.log('search paginated repos', q)
  return new Promise((resolve, reject) => {
    fetch(
      encodeURI(`${constants.HOST}${constants.URI.SEARCH_REPOS}?q=${q}&page=${page}&per_page=10`), {
      headers: { Accept: constants.HEADER.MERCY_PREVIEW },
      method: 'GET'
    })
    .then(response => {
      resolve(response.json())})
    .catch(err => reject(err))
  });
}

export {
  searchAllRepos,
  searchLimitedRepos,
  searchPaginatedRepos,
  searchMockRepo
}
