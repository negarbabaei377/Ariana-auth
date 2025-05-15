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
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
            toastStyle={{
                fontSize: "15px",
            }}
        />
    </React.StrictMode>
);
