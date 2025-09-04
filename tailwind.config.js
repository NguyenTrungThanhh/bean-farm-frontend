/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    green: '#008b4b',
                    yellow: '#f8c144',
                },
            },
            keyframes: {
                wiggleScale: {
                    '0%': { transform: 'scale(0.8)' },
                    '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate(-8deg)' },
                    '30%, 50%, 70%, 90%': { transform: 'scale3d(1, 1, 1) rotate(8deg)' },
                    '40%, 60%, 80%': { transform: 'scale3d(1, 1, 1) rotate(-8deg)' },
                    '100%': { transform: 'scale(0.9)' },
                },
                progressMove: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '40px 0' },
                },
                beaconPulse: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '50%': { opacity: '0.6' },
                    '100%': { transform: 'scale(1.6)', opacity: '0' },
                },
                shakeRotate: {
                    '0%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '10%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '20%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '30%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '40%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '50%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '100%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                },
                popupScaleIn: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                popupScaleOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0)', opacity: '0' },
                },
                zoomHea: {
                    '0%': { transform: 'scale(0.9, 0.9)' },
                    '10%, 20%': { transform: 'scale3d(0.95, 0.95, 0.95) rotate(-2deg)' },
                    '30%, 50%, 70%, 90%': { transform: 'scale3d(1, 1, 1) rotate(2deg)' },
                    '40%, 60%, 80%': { transform: 'scale3d(1, 1, 1) rotate(-2deg)' },
                    '100%': { transform: 'scale(0.95)' },
                },
            },
            animation: {
                wiggleScale: 'wiggleScale 1s ease-in-out infinite',
                progressMove: 'progressMove 1.5s linear infinite',
                beacon: 'beaconPulse 2s infinite ease-out',
                shake: 'shakeRotate 1s ease-in-out infinite',
                popupIn: 'popupScaleIn 0.3s ease-out forwards',
                popupOut: 'popupScaleOut 0.3s ease-out forwards',
                zoomHea: 'zoomHea 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
