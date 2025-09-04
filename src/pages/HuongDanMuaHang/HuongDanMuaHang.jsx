import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HuongDanMuaHang() {
    useEffect(() => {
        document.title = 'Hướng dẫn mua hàng';
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
                        <h1 className="text-sm text-primary-yellow">Hướng dẫn mua hàng</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <p>
                        <b>Bước 1:</b> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
                    </p>
                    <p>
                        <b>Bước 2:</b> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
                    </p>
                    <p>
                        Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ
                        hàng
                    </p>
                    <p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p>
                    <p>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán</p>
                    <p>
                        <b>Bước 3:</b> Lựa chọn thông tin tài khoản thanh toán
                    </p>
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
                        <b>Bước 4:</b> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận
                        chuyển cho đơn hàng của mình
                    </p>
                    <p>
                        <b>Bước 5:</b> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
                    </p>
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

export default HuongDanMuaHang;
