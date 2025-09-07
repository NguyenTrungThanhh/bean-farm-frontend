import { NavLink, useNavigate } from 'react-router-dom';
import config from '@/configs';

function SidebarAccount() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');

        navigate(config.routes.home);
    };

    return (
        <div className="w-[24%]">
            <div className="mb-7">
                <h1 className="text-[19px] uppercase mb-1">Trang tài khoản</h1>
                <p className="text-sm">
                    <b>Xin chào, </b>
                    <span className="text-[#ef4339] font-bold">{username}</span> <b>!</b>
                </p>
            </div>
            <div className="text-sm flex flex-col gap-4">
                <NavLink
                    to={config.routes.Account}
                    className={({ isActive }) =>
                        isActive ? 'text-primary-yellow' : 'text-black hover:text-primary-yellow duration-300'
                    }
                >
                    Thông tin tài khoản
                </NavLink>

                <NavLink
                    to={config.routes.DonHangCuaBan}
                    className={({ isActive }) =>
                        isActive ? 'text-primary-yellow' : 'text-black hover:text-primary-yellow duration-300'
                    }
                >
                    Đơn hàng của bạn
                </NavLink>

                <NavLink
                    to={config.routes.DoiMatKhau}
                    className={({ isActive }) =>
                        isActive ? 'text-primary-yellow' : 'text-black hover:text-primary-yellow duration-300'
                    }
                >
                    Đổi mật khẩu
                </NavLink>

                <h1 className="hover:text-primary-yellow duration-300 cursor-pointer" onClick={handleLogout}>
                    Đăng xuất
                </h1>
            </div>
        </div>
    );
}

export default SidebarAccount;
