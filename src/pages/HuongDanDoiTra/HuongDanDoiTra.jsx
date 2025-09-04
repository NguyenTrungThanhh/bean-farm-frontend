import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HuongDanDoiTra() {
    useEffect(() => {
        document.title = 'Hướng dẫn đổi trả';
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
                        <h1 className="text-sm text-primary-yellow">Hướng dẫn đổi trả</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <h1 className="font-bold">Trường hợp được đổi/trả hàng</h1>
                    <p>Sản phẩm mua rồi nhưng không ưng ý</p>
                    <p>
                        - Người mua có thể trả hàng khi không vừa ý trong vòng 1h kể từ khi nhận hàng, Bean sẽ đổi sản
                        phẩm cho khách. Sản phẩm muốn đổi hoặc trả cần giữ sản phâm nguyên đai, chưa mở nắp, chưa sử
                        dụng. Không nhất thiết còn tem mác hay hỏng hộp. Không bị méo mó, biến dạng.
                    </p>
                    <p>Sản phẩm mua bị lỗi</p>
                    <p>
                        Quý khách vui lòng kiểm tra sản phẩm trước khi thanh toán. Trong trường hợp sản phẩm bị hư hại
                        trong quá trình vận chuyển, quý khách vui lòng từ chối và gửi lại sản phẩm cho chúng tôi
                    </p>
                    <p>Sản phẩm không sử dụng được ngay khi được giao</p>
                    <p>
                        Trước tiên, hãy dành thời gian đọc kỹ tem hướng dẫn sử dụng và chắc rằng sản phẩm phù hợp với
                        nhu cầu của bạn. Vui lòng liên hệ ngay cho chúng tôi để được hỗ trợ hồi trả lại hàng
                    </p>
                    <p>Sản phẩm giao không đúng theo đơn đặt hàng</p>
                    <p>
                        Bạn nghĩ rằng sản phẩm giao cho bạn không đúng với đơn đặt hàng? Hãy liên hệ với chúng tôi càng
                        sớm càng tốt, hệ thống của chúng tôi sẽ kiểm tra nếu hàng của bạn bị gửi nhầm. Trong trường hợp
                        đó, chúng tôi sẽ thay thế đúng mặt hàng bạn yêu cầu (khi có hàng).
                    </p>
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
                    <p>
                        <b>Trân trọng!</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HuongDanDoiTra;
