import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import { store } from './store/store';
console.log(2342)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        sdsfsdf
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
