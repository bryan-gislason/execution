import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from './data';

const renderer = (store: any, target: HTMLElement) => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    target
  );
};

const rootStore = createStore();
renderer(rootStore, document.getElementById("app") as HTMLElement);
