import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HuongDanThanhToan() {
    useEffect(() => {
        document.title = 'Hướng dẫn thanh toán';
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
                        <h1 className="text-sm text-primary-yellow">Hướng dẫn thanh toán</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <h1 className="font-bold">Lựa chọn thông tin tài khoản thanh toán</h1>
                    <p>
                        Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có
                        tài khoản trên hệ thống
                    </p>
                    <p>
                        Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp
                        tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình
                    </p>
                    <p>
                        Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài
                        khoản
                    </p>
                    <p>
                        + Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho
                        đơn hàng của mình
                    </p>
                    <p>+ Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</p>
                    <p>
                        Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại
                        đơn hàng và địa chỉ của bạn.
                    </p>
                    <p>Trân trọng cảm ơn.</p>
                </div>
            </div>
        </div>
    );
}

export default HuongDanThanhToan;
