import  React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
//import Stuff from './Componants/carousel';
ReactDOM.render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>

 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals