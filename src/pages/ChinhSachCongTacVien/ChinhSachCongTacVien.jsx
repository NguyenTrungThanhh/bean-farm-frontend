import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChinhSachCongTacVien() {
    useEffect(() => {
        document.title = 'Chính sách cộng tác viên';
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
                        <h1 className="text-sm text-primary-yellow">Chính sách cộng tác viên</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <p>
                        <b> Chính sách hoa hồng chung:</b> là chính sách áp dụng cho toàn bộ sản phẩm trên website ngoại
                        trừ đi các sản phẩm có mức hoa hồng đặc biệt thiết lập tại mục “Chính sách hoa hồng theo sản
                        phẩm”. Khi đối tác giới thiệu các đơn hàng chỉ chứa sản phẩm thông thường (không nằm trong danh
                        sách sản phẩm có hoa hồng đặc biệt) thì sẽ được tính toán mức hoa hồng như chính sách chung. Để
                        thiết lập chính sách hoa hồng chung, bạn cần chọn:
                    </p>
                    <p>
                        <b>Kiểu chính sách</b> với 1 trong 2 kiểu chính sách có thể áp dụng là:
                    </p>
                    <p>% hoa hồng theo giá trị đơn hàng</p>
                    <p>Số tiền cố định theo mỗi đơn hàng</p>
                    <p>
                        Và <b>Giá trị đơn hàng áp dụng</b> theo:
                    </p>
                    <p>
                        Tổng giá trị đơn hàng không có phí vận chuyển: hoa hồng của đối tác được tính trên tổng giá trị
                        đơn hàng trừ đi phí vận chuyển
                    </p>
                    <p>
                        Tổng giá trị đơn hàng bao gồm phí vận chuyển: Hoa hồng của đối tác sẽ được tính trên tổng giá
                        trị đơn hàng có bao gồm phí vận chuyển
                    </p>
                    <p>
                        <b>Chính sách hoa hồng theo sản phẩm</b> (Tùy chọn): là chính sách chỉ áp dụng cho 1 danh sách
                        sản phẩm hay danh mục sản phẩm tùy chọn. Khi đơn hàng chỉ chứa các sản phẩm có mức hoa hồng đặc
                        biệt thì sẽ áp dụng mức hoa hồng được thiết lập cho từng sản phẩm để tính ra mức hoa hồng cho
                        đối tác. Để thiết lập chính sách hoa hồng theo sản phẩm bạn cần:
                    </p>
                    <p>
                        <b>Lựa chọn sản phẩm</b>, bạn có thể chọn đích danh 1 sản phẩm cụ thể hoặc chọn cả danh mục sản
                        phẩm
                    </p>
                    <p>
                        Chọn loại <b>Hoa hồng áp dụng</b>: Theo phần trăm (%) hoặc Theo số tiền (đ)
                    </p>
                    <p>
                        Tiếp theo, bạn chọn <b>Xác nhận</b> để hoàn tất thiết lập chính sách hoa hồng cho sản phẩm
                    </p>
                    <p>
                        Sau khi <b>Xác nhận</b>, sản phẩm / danh mục sản phẩm thuộc chính sách hoa hồng theo sản phẩm sẽ
                        hiển thị ở mục <b>Danh sách hoa hồng theo sản phẩm</b>
                    </p>
                    <p>
                        <b>Trân Trọng!</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachCongTacVien;
