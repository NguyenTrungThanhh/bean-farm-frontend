import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import SidebarAccount from '@/components/SidebarAccount';
import { useEffect } from 'react';

function DonHangCuaBan() {
    useEffect(() => {
        document.title = 'Trang đơn hàng';
    });

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
                        <h1 className="text-sm text-primary-yellow">Đơn hàng</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto py-10">
                <div className="flex gap-4">
                    <SidebarAccount />
                    <div className="w-[76%]">
                        <h1 className="text-[19px] uppercase mb-6">Đơn hàng của bạn</h1>
                        <div className="border rounded">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary-yellow text-white text-sm">
                                        <th className="py-1 px-3 border">Đơn hàng</th>
                                        <th className="py-1 px-3 border">Ngày</th>
                                        <th className="py-1 px-3 border">Địa chỉ</th>
                                        <th className="py-1 px-3 border">Giá trị đơn hàng</th>
                                        <th className="py-1 px-3 border">TT thanh toán</th>
                                        <th className="py-1 px-3 border">TT vận chuyển</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="6" className="text-center py-6 text-gray-600 text-sm">
                                            Không có đơn hàng nào.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonHangCuaBan;
