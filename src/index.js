import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRoute} from "./routes/App.route";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRoute/>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
        />
    </React.StrictMode>
);
