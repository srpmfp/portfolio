import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from './components/MainView/MainView.jsx';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MainView />

);

reportWebVitals();
