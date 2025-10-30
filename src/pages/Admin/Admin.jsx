import { useState } from 'react';
import axios from '@/api/axiosConfig';
import { ClipLoader } from 'react-spinners';
import { assets } from '@/assets/assets';
import { toast } from 'react-toastify';
import config from '@/configs';

function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password,
            };
            const response = await axios.post('/api/v1/client/user/login', user);
            console.log(response.data);

            if (response.data.success) {
                const { token, user } = response.data;

                if (token) {
                    // Tính thời gian hết hạn (1 ngày sau)
                    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

                    localStorage.setItem('token', token);
                    localStorage.setItem('username', user.name);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('role', user.role); // thêm role
                    localStorage.setItem('expiresAt', expiresAt.toString());

                    toast.success('Đăng nhập thành công');
                    setTimeout(() => {
                        window.location.href = config.routes.Dashboard;
                    }, 3000);
                } else {
                    toast.error('Lỗi: Không tìm thấy token!');
                }
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(
                    <div>
                        <h4 className="text-black font-bold">Đăng nhập thất bại</h4>
                        <p className="text-black text-[14px]">{error.response.data.error}</p>
                    </div>,
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    },
                );
            } else {
                toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
            }
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Logo + tiêu đề */}
                <div className="text-center mb-6">
                    <img src={assets.logo} alt="Logo" className="mx-auto mb-2" />
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                    <p className="text-gray-500 text-sm">Đăng nhập để quản trị hệ thống</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="admin@gmail.com"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                            Mật khẩu
                        </label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary-green text-white rounded-md py-3 hover:bg-primary-yellow duration-300"
                    >
                        <span>Đăng nhập</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
