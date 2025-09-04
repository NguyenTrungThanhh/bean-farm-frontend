import { Navigate } from 'react-router-dom';

function PrivateRouteAdmin({ children }) {
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin ? children : <Navigate to="/admin" />;
}

export default PrivateRouteAdmin;
