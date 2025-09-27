import axios from 'axios';
import { toCamel } from '@/utils/caseConverter';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// ✅ Convert response: snake_case → camelCase
instance.interceptors.response.use(
    (response) => {
        if (response.data) {
            response.data = toCamel(response.data);
        }
        return response;
    },
    (error) => Promise.reject(error),
);

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default instance;
