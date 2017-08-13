import React from 'react';
import ReactDOM from 'react-dom';
import './containers/App/styles.css';
import AppContainer from './containers/App/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
