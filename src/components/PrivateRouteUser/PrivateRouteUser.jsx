import { Navigate } from 'react-router-dom';
import config from '@/configs';

function PrivateRouteUser({ children }) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (!token || !username) {
        // Truyền state sang Login để Login biết cần bắn toast
        return <Navigate to={config.routes.Login} state={{ fromProtected: true }} replace />;
    }

    return children;
}

export default PrivateRouteUser;
