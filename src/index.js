import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import AviaService from './services/avia-service';
import AviaServiceContext from './components/avia-service-context';
import { Provider } from 'react-redux';
import store from './store';

const aviaService = new AviaService();

ReactDOM.render(
  <Provider store={store}>
    <AviaServiceContext.Provider value={aviaService}>
      <App />
    </AviaServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);

