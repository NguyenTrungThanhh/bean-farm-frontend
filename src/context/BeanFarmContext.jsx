import axios from '@/api/axiosConfig';
import { createContext, useEffect, useState } from 'react';

export const BeanFarmContext = createContext();

const texts = ['Bạn muốn tìm gì?', 'Nông sản sạch', 'Trái cây', 'Thực phẩm sạch'];

const BeanFarmContextProvider = ({ children }) => {
    const url = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length + 1));
                if (displayText === currentText) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setDisplayText(currentText.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    // useEffect(() => {
    //     getTinTucData();
    // }, []);

    // const getTinTucData = async () => {
    //     try {
    //         const response = await axios.get(`${url}/api/v1/client/TinTuc`);
    //         setTinTucData(response.data.news);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const contextValue = { url, displayText };

    return <BeanFarmContext.Provider value={contextValue}>{children}</BeanFarmContext.Provider>;
};

export default BeanFarmContextProvider;
