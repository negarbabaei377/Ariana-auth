import React from 'react';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import {PATH} from "../config/path.config";
import * as Pages from '../pages';
import {PrivateRoute, PublicRoute} from "./components";

export const AppRoute = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path={PATH.LOGIN} element={<PublicRoute Component={Pages.LoginPage}/>} />
                    <Route path={PATH.REGISTER} element={<PublicRoute Component={Pages.RegisterPage}/>} />
                    <Route path={PATH.DASHBOARD} element={<PublicRoute Component={Pages.DashboardPage}/>} />
                </Routes>
        </BrowserRouter>
    );
};