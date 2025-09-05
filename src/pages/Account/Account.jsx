import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import SidebarAccount from '@/components/SidebarAccount';

function Account() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    useEffect(() => {
        document.title = 'Trang khách hàng';
    });

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');

        navigate(config.routes.home);
    };

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Trang khách hàng</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto py-10">
                <div className="flex gap-4">
                    <SidebarAccount username={username} onLogout={handleLogout} />
                    <div className="w-[76%]">
                        <h1 className="text-[19px] uppercase mb-6">Thông tin tài khoản</h1>
                        <div className="text-sm flex flex-col gap-4">
                            <p>
                                <b>Họ tên: </b>
                                {username}
                            </p>
                            <p>
                                <b>Email: </b>
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
