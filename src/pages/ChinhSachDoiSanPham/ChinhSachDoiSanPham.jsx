import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChinhSachDoiSanPham() {
    useEffect(() => {
        document.title = 'Chính sách đổi sản phẩm';
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
                        <h1 className="text-sm text-primary-yellow">Chính sách đổi sản phẩm</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <p>+ Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện</p>
                    <p>+ Nằm trong chính sách đổi trả sản phẩm của Bean</p>
                    <p>+ Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa bóc seal</p>
                    <p>+ Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng</p>
                    <p>+ Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí</p>
                    <p>+ Đối với khách VIP thì khi đổi trả Bean sẽ hỗ trợ miễn phí quá trình đổi trả</p>
                    <h1 className="font-bold">Điều kiện đổi trả hàng</h1>
                    <p>
                        Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được hàng và phải liên hệ gọi
                        ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng.
                    </p>
                    <h1 className="font-bold">Điều kiện đổi trả hàng:</h1>
                    <p>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</p>
                    <p>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</p>
                    <p>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</p>
                    <p>
                        - Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương
                        20% giá trị đơn hàng.
                    </p>
                    <h1 className="font-bold">Quy trình đổi trả hàng</h1>
                    <p>
                        Bước 1: Sau khi nhận được hàng. Yêu cầu quý vị kiểm tra kỹ 1 lần trước khi nhận hàng. Nếu có vấn
                        đề xin vui lòng liên hệ Trung tâm hỗ trợ khách hàng tại thời điểm nhân viên giao hàng còn ở đó
                    </p>
                    <p>- Trường hợp sau khi nhân viên giao hàng đã đi</p>
                    <p>- Nếu muốn đổi trả hàng có thể liên hệ với chúng tôi để được xử lý và hẹn lịch đổi trả hàng</p>
                    <p>Bước 2: Sau khi Trung tâm hỗ trợ khách hàng thông báo lịch hẹn nhận hàng trả</p>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachDoiSanPham;
