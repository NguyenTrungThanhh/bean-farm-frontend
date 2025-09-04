import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import BeanFarmContextProvider from '@/context/BeanFarmContext';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BeanFarmContextProvider>
        <ToastContainer />
        <App />
    </BeanFarmContextProvider>,
    // </StrictMode>,
);
