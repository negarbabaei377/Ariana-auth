import { Navigate } from 'react-router-dom';
import {PATH} from "../../config/path.config";

export const PublicRoute = ({Component, isAuthenticated}) => {
    return !isAuthenticated ? <Component /> : <Navigate to={PATH.DASHBOARD} replace />;
};
