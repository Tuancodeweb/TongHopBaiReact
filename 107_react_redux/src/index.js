import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Store1 from './Store';
ReactDOM.render(
    <Provider store={Store1}>
        <App/>
    </Provider>    

    , document.getElementById('root'));
registerServiceWorker();
