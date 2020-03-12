import React from 'react';
import ReactDOM from 'react-dom';

//redux setup
import { Provider } from 'react-redux';
import store from './store/store';

//styles & root component
import './index.css';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
