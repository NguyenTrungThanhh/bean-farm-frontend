import { useEffect, useState } from 'react';

function Admin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Admin';
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const adminPassword = '123456';
        if (password === adminPassword) {
            localStorage.setItem('isAdmin', 'true');
            window.location.reload();
        } else {
            setError('Mật khẩu không đúng');
        }
    };

    if (localStorage.getItem('isAdmin')) {
        return (
            <div className="flex items-center justify-center min-h-screen px-4">
                <h1 className="text-3xl font-bold text-center">Welcome, Admin!</h1>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-primary-green text-white py-2 rounded-md hover:bg-primary-yellow transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Admin;
