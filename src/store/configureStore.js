import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares = [routerMiddleware(history), thunkMiddleware];

  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ...middlewares,
      ),
    ),
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer(history)));
  }

  return store;
}
