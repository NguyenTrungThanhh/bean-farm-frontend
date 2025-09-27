import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function PrivateRouteAdmin({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/admin" />;
    }

    try {
        const decoded = jwtDecode(token); // { id, role, iat, exp }
        if (decoded.role !== 'admin') {
            return <Navigate to="/" />; // user thường thì về trang chủ
        }
        return children;
    } catch (error) {
        return <Navigate to="/admin" />;
    }
}

export default PrivateRouteAdmin;
