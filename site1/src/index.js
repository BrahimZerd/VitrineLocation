import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";

import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './index.css';

const store = configureStore();


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
      </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
