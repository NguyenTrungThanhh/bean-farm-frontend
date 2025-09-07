import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import SidebarAccount from '@/components/SidebarAccount';
import { useEffect } from 'react';

function DoiMatKhau() {
    useEffect(() => {
        document.title = 'Thay đổi mật khẩu';
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                        <Link to={config.routes.Account}>
                            <h1 className="text-sm hover:text-primary-yellow">Tài khoản</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Thay đổi mật khẩu</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto py-10">
                <div className="flex gap-4">
                    <SidebarAccount />
                    <div className="w-[76%]">
                        <h1 className="text-[19px] uppercase mb-6">Đổi mật khẩu</h1>
                        <p className="text-sm mb-4">
                            Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự
                        </p>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="passwordOld" className="mb-2">
                                    Mật khẩu cũ
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="passwordOld"
                                    className="w-[475px] p-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="passwordNew" className="mb-2">
                                    Mật khẩu mới
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="passwordNew"
                                    className="w-[475px] p-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="verifyPassword" className="mb-2">
                                    Xác nhận lại mật khẩu
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id="verifyPassword"
                                    className="w-[475px] p-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary-green text-white px-[14px] py-[10px] rounded-md font-semibold text-sm uppercase hover:bg-primary-yellow duration-300"
                            >
                                Đặt lại mật khẩu
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoiMatKhau;
