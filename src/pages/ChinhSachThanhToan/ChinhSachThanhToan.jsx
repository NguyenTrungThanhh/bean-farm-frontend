import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChinhSachThanhToan() {
    useEffect(() => {
        document.title = 'Chính sách thanh toán';
    });

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Chính sách thanh toán</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <h1 className="font-bold">Khách hàng thanh toán trực tiếp tại cửa hàng</h1>
                    <p>+ Nhận ưu đãi</p>
                    <p>+ Nhận quà tặng kèm</p>
                    <p>+ Checkin tại cửa hàng</p>
                    <h1 className="font-bold">Khách hàng thanh toán online</h1>
                    <p>+ Chuyển khoản trước khi nhận hàng</p>
                    <p>+ Quà tặng kèm bất kỳ</p>
                    <p>
                        Khách hàng có nhu cầu khiếu nại, đổi trả sản phẩm do lỗi của Bean có thể liên hệ qua Hotline
                        1900 6750 để được hỗ trợ sớm nhất.
                    </p>
                    <p>Tư vấn viên sẽ hướng dẫn khách hàng các bước cần thiết để tiến hành trả thanh toán.</p>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachThanhToan;
