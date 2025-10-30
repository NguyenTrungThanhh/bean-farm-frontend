import { NavLink } from 'react-router-dom';
import config from '@/configs';

function SidebarAccount() {
    const username = localStorage.getItem('username');

    return (
        <div className="w-full md:w-[24%]">
            <div className="mb-6 md:mb-7">
                <h1 className="text-[19px] uppercase mb-1">Trang tài khoản</h1>
                <p className="text-sm">
                    <b>Xin chào, </b>
                    <span className="text-[#ef4339] font-bold">{username}</span> <b>!</b>
                </p>
            </div>

            <div className="text-sm flex flex-col gap-3 md:gap-4">
                <NavLink
                    to={config.routes.Account}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-primary-brown font-semibold'
                            : 'text-black hover:opacity-55 duration-300 font-semibold'
                    }
                >
                    Thông tin tài khoản
                </NavLink>

                <NavLink
                    to={config.routes.DoiMatKhau}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-primary-brown font-semibold'
                            : 'text-black hover:opacity-55 duration-300 font-semibold'
                    }
                >
                    Đổi mật khẩu
                </NavLink>
            </div>
        </div>
    );
}

export default SidebarAccount;
