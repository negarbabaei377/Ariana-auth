import { Navigate } from 'react-router-dom';
import {PATH} from "../../config/path.config";

export const PrivateRoute = ({Component, isAuthenticated}) => {
    return isAuthenticated ? <Component /> : <Navigate to={PATH.LOGIN} replace />;
};
