import { useState, useEffect } from 'react';
import { assets } from '@/assets/assets';
import config from '@/configs';
import SidebarLink from '@/components/SidebarLink';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { faHouse, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { to: config.routes.Dashboard, text: 'Tổng quan', icon: faHouse },
    { to: config.routes.ListUser, text: 'Quản lý người dùng', icon: faUser },
    { to: config.routes.AddTinTuc, text: 'Tạo tin tức', icon: faNewspaper },
    { to: config.routes.ListTinTuc, text: 'Danh sách tin tức', icon: faNewspaper },
];

function SidebarAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isOpen) return;
        const closeMenu = () => setIsOpen(false);
        window.addEventListener('click', closeMenu);
        return () => window.removeEventListener('click', closeMenu);
    }, [isOpen]);

    if (!(localStorage.getItem('token') && localStorage.getItem('role') === 'admin')) {
        return null;
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
        setTimeout(() => window.location.reload(), 100);
    };

    return (
        <>
            {/* Toggle mobile */}
            <button
                className="fixed top-4 left-4 z-50 p-3 bg-green-700 text-white rounded-md lg:hidden shadow-lg"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed lg:static inset-y-0 left-0 z-40 flex flex-col justify-between
                w-80 h-screen bg-gradient-to-b from-green-100 to-white shadow-lg
                border-r border-gray-200 px-6 py-6 transition-transform duration-300 overflow-y-auto
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Logo */}
                <div className="flex items-center justify-center mb-10 shrink-0">
                    <img src={assets.logo} alt="Logo" className="w-40 drop-shadow-sm" />
                </div>

                {/* Menu */}
                <nav className="flex-1 flex flex-col gap-2 overflow-y-auto">
                    {menuItems.map((item, index) => (
                        <SidebarLink
                            key={index}
                            to={item.to}
                            text={item.text}
                            icon={item.icon}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </nav>

                {/* Footer */}
                <div className="border-t pt-6 flex flex-col items-center text-center bg-white rounded-2xl shadow-inner mt-6 p-4 shrink-0">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700">{localStorage.getItem('username')}</h4>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-3 flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 text-sm px-3 py-2 rounded-lg transition"
                    >
                        <FaSignOutAlt size={14} />
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
}

export default SidebarAdmin;
