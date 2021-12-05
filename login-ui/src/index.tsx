import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import App from '@components/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <ToastContainer position="bottom-right" hideProgressBar={true} autoClose={10000} />
    </BrowserRouter>,
    document.getElementById('app-root'),
);