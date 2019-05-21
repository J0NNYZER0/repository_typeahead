import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import repos from './repos';
import site from './site';

export default history => combineReducers({
  router: connectRouter(history),
  repos,
  site
});
