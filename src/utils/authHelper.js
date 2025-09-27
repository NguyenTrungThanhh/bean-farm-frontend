import { jwtDecode } from 'jwt-decode';

let logoutCallback = null;

// Cho phép Context đăng ký callback logout
export const setLogoutCallback = (callback) => {
    logoutCallback = callback;
};

// Gọi logout từ bất kỳ đâu
export const triggerLogout = () => {
    if (logoutCallback) {
        logoutCallback();
    } else {
        localStorage.clear();

        // Nếu đã ở trang login thì KHÔNG redirect nữa
        if (window.location.pathname !== '/login') {
            window.location.href = '/login';
        }
    }
};

// Check token còn hạn không
export const validateToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token); // { id, role, iat, exp }
        if (!decoded.exp) return false;

        // exp là giây, Date.now() là ms
        return Date.now() < decoded.exp * 1000;
    } catch (err) {
        return false;
    }
};
