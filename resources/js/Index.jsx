import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './Router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

ReactDOM.render(
    <BrowserRouter>
        <Route component={Main}/>
    </BrowserRouter>
    , document.getElementById('index')
);
