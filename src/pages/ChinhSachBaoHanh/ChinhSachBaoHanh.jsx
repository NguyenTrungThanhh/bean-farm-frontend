import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChinhSachBaoHanh() {
    useEffect(() => {
        document.title = 'Chính sách bảo hành';
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
                        <h1 className="text-sm text-primary-yellow">Chính sách bảo hành</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <p>
                        Trong thời gian sử dụng nếu gặp bất kỳ trục trặc nào hoặc lỗi do người sử dụng khách hàng có thể
                        liên lạc trực tiếp với <b>Bean</b> để được giúp đỡ.
                    </p>
                    <p>
                        <b>1, Định nghĩa Bảo hành</b>: Bảo hành sản phẩm là khắc phục những lỗi hỏng hóc, sự cố kỹ thuật
                        xảy ra do lỗi của nhà sản xuất.
                    </p>
                    <p>
                        <b>2, Quy định về bảo hành:</b>
                    </p>
                    <p>
                        Sản phẩm được bảo hành miễn phí nếu sản phẩm đó còn thời hạn bảo hành được tính kể từ ngày giao
                        hàng.
                    </p>
                    <p>
                        Thời hạn bảo hành được ghi trên Phiếu Bảo hành (thông thường là 12 tháng) và còn theo quy định
                        của từng hãng sản xuất đối với tất cả các sự cố về mặt kỹ thuật.
                    </p>
                    <p>Có phiếu bảo hành và tem bảo hành hợp lệ của công ty trên sản phẩm.</p>
                    <p>
                        <b>3, Những trường hợp không được bảo hành:</b>
                    </p>
                    <p>Sản phẩm đã quá thời hạn bảo hành ghi trên phiếu hoặc mất Phiếu bảo hành.</p>
                    <p>Tem niêm phong bảo hành bị rách, vỡ, bị dán đè hoặc bị sửa đổi.</p>
                    <p>Số máy trên sản phẩm không xác định được hoặc sai so với số máy được ghi trên phiếu bảo hành.</p>
                    <p>
                        Sản phẩm bị hư hỏng do tác động cơ học làm rơi, vỡ, va đập, trầy xước, móp méo, ẩm ướt, hoen rỉ,
                        chảy nước hoặc do hỏa hoạn, thiên tai gây nên.
                    </p>
                    <p>Sản phẩm có dấu hiệu hư hỏng do chuột bọ hoặc côn trùng xâm nhập.</p>
                    <p>Sử dụng không đúng sách hướng dẫn, sử dụng sai điện áp quy định.</p>
                    <p>
                        Các loại phụ kiện kèm theo như: Điều khiển từ xa, Pin điều khiển, pin CMOS, dây nguồn, dây tín
                        hiệu, nắn dòng, đèn tín hiệu, tai nghe bị hỏng gây ra cháy nổ.
                    </p>
                    <p>
                        Tự ý tháo dỡ, sửa chữa không được sự ủy quyền của <b>Bean</b>
                    </p>
                    <p>
                        <b>4, Bảo trì, bảo dưỡng.</b>
                    </p>
                    <p>
                        Sau khi hết thời gian bảo hành nếu sản phẩm bị hỏng hóc vì nguyên nhân bất kỳ gì đó. Quý khách
                        có thể mang đến sản phẩm đến <b>Bean</b> để công ty kiểm tra, sau khi kiểm tra <b>Bean</b> sẽ
                        báo cho Quý khách chi phí và thời gian đế sửa chữa sản phẩm đó.
                    </p>
                    <p>
                        <b>5, Địa điểm bảo hành & bảo trì:</b>
                    </p>
                    <p>
                        Tất cả các sản phẩm đều được bảo hành, bảo trì tại <b>Bean</b>
                    </p>
                    <p>
                        <b>Lưu ý:</b> Bảo hành không bao gồm chi phí vận chuyển hàng và giao hàng.
                    </p>
                    <p>Thông tin xin Quý khách vui lòng liên hệ:</p>
                    <p>
                        <b>Trung tâm bảo hành:</b>
                    </p>
                    <p>
                        <b>70 Lữ Gia - P.15 - Q.11 - TP.HCM</b>
                    </p>
                    <p>
                        <b>Tel: 1800 6750</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachBaoHanh;
