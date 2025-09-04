import config from '@/configs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChinhSachThanhVien() {
    useEffect(() => {
        document.title = 'Chính sách thành viên';
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
                        <h1 className="text-sm text-primary-yellow">Chính sách thành viên</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col gap-4 text-sm">
                    <p>Điều kiện chính sách thành viên</p>
                    <h1 className="font-bold">1. Thẻ thành viên</h1>
                    <p>
                        Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống cửa hàng Bean sẽ được cấp
                        thẻ thành viên.
                    </p>
                    <h1 className="font-bold">2. Thẻ VIP</h1>
                    <h1 className="font-bold">Điều kiện nhận thẻ VIP:</h1>
                    <p>+ Có giá trị tổng đơn hàng lớn hơn 15 triệu/ tháng</p>
                    <p>+ Mua hàng với giá trị 5 triệu trợ lên</p>
                    <p>+ Tham gia các hoạt động, chương trình khuyến mãi của Bean</p>
                    <p>
                        <b>Lưu ý:</b> Hạn mức 10, 20, 30, 50,100 triệu đồng là tính từ thời điểm bắt đầu mua tới khi lên
                        thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100 triệu, tổng tiền này là tính từ khi khách hàng
                        mua lần đầu và cộng dồn lên.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachThanhVien;
