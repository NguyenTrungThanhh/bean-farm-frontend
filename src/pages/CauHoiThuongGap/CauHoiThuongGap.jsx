import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

const faqThanhVien = [
    {
        question: '1. Làm sao để có được thẻ thành viên?',
        answer: (
            <p>
                Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống cửa hàng Bean Farm sẽ được cấp thẻ
                thành viên.
            </p>
        ),
    },
    {
        question: '2. Nâng cấp thẻ VIP như thế nào?',
        answer: (
            <div>
                <p className="font-bold">Điều kiện nhận thẻ VIP:</p>
                <ul className="list-inside mt-2 pl-2">
                    <li>+ Có giá trị tổng đơn hàng lớn hơn 15 triệu/tháng</li>
                    <li>+ Mua hàng với giá trị 5 triệu trở lên</li>
                    <li>+ Tham gia các hoạt động, chương trình khuyến mãi của Bean</li>
                </ul>
                <p className="mt-2">
                    <span className="font-bold">Lưu ý:</span> Hạn mức 10, 20, 30, 50, 100 triệu đồng là tính từ thời
                    điểm bắt đầu mua tới khi lên thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100 triệu, tổng tiền này
                    là tính từ khi khách hàng mua lần đầu và cộng dồn lên.
                </p>
            </div>
        ),
    },
    {
        question: '3. Quyền lợi của thành viên VIP là gì?',
        answer: (
            <p>
                Khi lên thành viên VIP bạn được hỗ trợ 24/24 bất cứ lúc nào bạn có vấn đề hoặc thắc mắc về sản phẩm đều
                được hỗ trợ tư vấn
            </p>
        ),
    },
];

const faqTaiKhoan = [
    {
        question: '1. Tại sao tôi không thể đăng nhập vào tài khoản của tôi?',
        answer: (
            <p>
                Quý khách vui lòng kiểm tra kỹ về kiểu gõ hoặc phím Caps Lock/ IN HOA trong quá trình điền thông tin
                đăng nhập thành viên, trường hợp không thể đăng nhập thành công quý khách vui lòng chọn nút “Quên mật
                khẩu” ngay dưới ô mật khẩu và nhập email đã đăng ký.
            </p>
        ),
    },
    {
        question: '2. Tôi có thể sử dụng chung tài khoản với người khác được không?',
        answer: (
            <p>
                Quý khách nên sử dụng tài khoản cá nhân để đảm bảo độ tin cậy cũng như quyền lợi của bản thân khi mua
                sắm. Việc sử dụng chung tài khoản có thể dẫn đến những sai sót mà người chịu ảnh hưởng trực tiếp chính
                là quý khách hàng.
            </p>
        ),
    },
    {
        question: '3. Tại sao tôi nên đăng ký thành viên?',
        answer: (
            <p>
                Việc đăng ký tài khoản là cơ hội giúp quý khách trở thành một trong những khách hàng thân thiết của Bean
                Farm , được tiếp cận nhanh nhất các chương trình khuyến mãi, thông tin ưu đãi khi mua sắm.
            </p>
        ),
    },
];

const faqDatHang = [
    {
        question: '1. Tôi có thể đặt hàng bằng những hình thức nào?',
        answer: (
            <div>
                <p className="font-bold">Quý khách có thể mua hàng bằng những hình thức sau:</p>
                <ul className="list-inside mt-2 pl-2">
                    <li>+ Đặt hàng trực tuyến tại website</li>
                    <li>+ Đặt hàng trực tiếp với tư vấn viên qua Hotline 1900 6750</li>
                    <li>+ Đặt hàng trực tuyến trên các sàn thương mại điện tử</li>
                    <li>+ Mua hàng trực tiếp tại các hệ thống cửa hàng</li>
                </ul>
                <p className="mt-2">
                    Chúng tôi luôn khuyến khích quý khách tạo tài khoản và đặt hàng online để được hưởng các chính sách
                    ưu đãi thành viên tốt hơn.
                </p>
            </div>
        ),
    },
    {
        question: '2. Tôi cần hỗ trợ mua hàng, làm cách nào để liên hệ với tư vấn viên?',
        answer: (
            <p>
                Để liên hệ với nhân viên tư vấn, quý khách vui lòng liên hệ qua Hotline 1900 6750 trong thời gian từ
                9:00 - 18:00, T2 - T6 hằng tuần.
            </p>
        ),
    },
    {
        question: '3. Có được kiểm tra sản phẩm trước khi nhận không?',
        answer: (
            <p>
                Sản phẩm cam kết đảm bảo, chất lượng. Chúng tôi rất vui khi bạn kiểm tra sản phẩm trước khi. Tuy nhiên,
                bạn không được bóc nhãn, seal của sản phẩm và không được sử dụng sản phẩm trước khi nhận hàng.
            </p>
        ),
    },
];

const faqThanhToan = [
    {
        question: '1. Tôi có thể thanh toán đơn hàng bằng những hình thức nào?',
        answer: (
            <div>
                <p className="font-bold">Quý khách có thể thanh toán cho chúng tôi bằng những hình thức sau:</p>
                <ol className="list-inside list-decimal mt-2 pl-2">
                    <li>Thanh toán tại chỗ (Ship COD)</li>
                    <li>Chuyển khoản trước: Khách hàng có thể chọn chuyển khoản trước vào tài khoản của chúng tôi:</li>
                </ol>
            </div>
        ),
    },
    {
        question: '2. Nếu đã thanh toán tôi có được hủy đơn hàng và có được hoàn tiền không?',
        answer: (
            <div>
                <p>
                    Về chính sách hủy đơn thì Bean có hỗ trợ cho khách hàng hủy đơn bằng cách liên hệ trực tiếp thông
                    qua hotline hoặc qua fanpage.
                </p>
                <p>
                    Đối với các đơn hủy mà chưa đóng gói vận chuyển chúng tôi sẽ hoàn 100% tổng giá trị đơn hàng Còn đối
                    với những đơn đã và đang trong quá trình đóng gói vận chuyển chúng tôi chỉ hoản 60% giá trị đơn
                    hàng.
                </p>
            </div>
        ),
    },
];

function CauHoiThuongGap() {
    const [isOpenThanhVien, setIsOpenThanhVien] = useState(faqThanhVien.map((_, i) => i === 0));
    const [isOpenTaiKhoan, setIsOpenTaiKhoan] = useState(faqTaiKhoan.map((_, i) => i === 0));
    const [isOpenDatHang, setIsOpenDatHang] = useState(faqDatHang.map((_, i) => i === 0));
    const [isOpenThanhToan, setIsOpenThanhToan] = useState(faqThanhToan.map((_, i) => i === 0));

    useEffect(() => {
        document.title = 'Câu hỏi thường gặp';
    });

    const toggleThanhVien = (index) => {
        setIsOpenThanhVien((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const toggleTaiKhoan = (index) => {
        setIsOpenTaiKhoan((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const toggleDatHang = (index) => {
        setIsOpenDatHang((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    const toggleThanhToan = (index) => {
        setIsOpenThanhToan((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Câu hỏi thường gặp</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex items-start gap-4">
                    <div className="w-[65%]">
                        <div className="mb-6">
                            <h1 id="hoi-dap-ve-thanh-vien" className="text-xl font-bold mb-3">
                                Hỏi đáp về thành viên
                            </h1>
                            <div>
                                {faqThanhVien.map((item, index) => (
                                    <div key={index} className="mb-2" onClick={() => toggleThanhVien(index)}>
                                        <h2
                                            className={`px-5 py-3 cursor-pointer ${
                                                isOpenThanhVien[index]
                                                    ? 'bg-primary-green text-white rounded-t-md'
                                                    : 'bg-[#E3E3E3] text-black rounded-md'
                                            }`}
                                        >
                                            {item.question}
                                        </h2>
                                        <div
                                            className={`px-5 border border-t-0 rounded-b-md overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
                                                isOpenThanhVien[index]
                                                    ? 'max-h-[500px] opacity-100 scale-y-100 py-4'
                                                    : 'max-h-0 opacity-0 scale-y-95 py-0'
                                            }`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 id="hoi-dap-ve-tai-khoan" className="text-xl font-bold mb-3">
                                Hỏi đáp về tài khoản
                            </h1>
                            <div>
                                {faqTaiKhoan.map((item, index) => (
                                    <div key={index} className="mb-2" onClick={() => toggleTaiKhoan(index)}>
                                        <h2
                                            className={`px-5 py-3 cursor-pointer ${
                                                isOpenTaiKhoan[index]
                                                    ? 'bg-primary-green text-white rounded-t-md'
                                                    : 'bg-[#E3E3E3] text-black rounded-md'
                                            }`}
                                        >
                                            {item.question}
                                        </h2>
                                        <div
                                            className={`px-5 border border-t-0 rounded-b-md overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
                                                isOpenTaiKhoan[index]
                                                    ? 'max-h-[500px] opacity-100 scale-y-100 py-4'
                                                    : 'max-h-0 opacity-0 scale-y-95 py-0'
                                            }`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 id="hoi-dap-ve-dat-hang" className="text-xl font-bold mb-3">
                                Hỏi đáp về đặt hàng
                            </h1>
                            <div>
                                {faqDatHang.map((item, index) => (
                                    <div key={index} className="mb-2" onClick={() => toggleDatHang(index)}>
                                        <h2
                                            className={`px-5 py-3 cursor-pointer ${
                                                isOpenDatHang[index]
                                                    ? 'bg-primary-green text-white rounded-t-md'
                                                    : 'bg-[#E3E3E3] text-black rounded-md'
                                            }`}
                                        >
                                            {item.question}
                                        </h2>
                                        <div
                                            className={`px-5 border border-t-0 rounded-b-md overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
                                                isOpenDatHang[index]
                                                    ? 'max-h-[500px] opacity-100 scale-y-100 py-4'
                                                    : 'max-h-0 opacity-0 scale-y-95 py-0'
                                            }`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 id="hoi-dap-ve-thanh-toan" className="text-xl font-bold mb-3">
                                Hỏi đáp về thanh toán
                            </h1>
                            <div>
                                {faqThanhToan.map((item, index) => (
                                    <div key={index} className="mb-2" onClick={() => toggleThanhToan(index)}>
                                        <h2
                                            className={`px-5 py-3 cursor-pointer ${
                                                isOpenThanhToan[index]
                                                    ? 'bg-primary-green text-white rounded-t-md'
                                                    : 'bg-[#E3E3E3] text-black rounded-md'
                                            }`}
                                        >
                                            {item.question}
                                        </h2>
                                        <div
                                            className={`px-5 border border-t-0 rounded-b-md overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
                                                isOpenThanhToan[index]
                                                    ? 'max-h-[500px] opacity-100 scale-y-100 py-4'
                                                    : 'max-h-0 opacity-0 scale-y-95 py-0'
                                            }`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-[35%] sticky top-2">
                        <div className="mb-4">
                            <h2 className="px-3 py-3 bg-primary-green text-sm font-bold text-white rounded-t-md uppercase">
                                Nội dung chính
                            </h2>
                            <div className="border border-t-0 text-sm rounded-md">
                                <div className="px-4 py-2">
                                    <a href="#hoi-dap-ve-thanh-vien" className="hover:text-primary-green duration-300s">
                                        Hỏi đáp về thành viên
                                    </a>
                                </div>
                                <div className="px-4 py-2">
                                    <a href="#hoi-dap-ve-tai-khoan" className="hover:text-primary-green duration-300s">
                                        Hỏi đáp về tài khoản
                                    </a>
                                </div>
                                <div className="px-4 py-2">
                                    <a href="#hoi-dap-ve-dat-hang" className="hover:text-primary-green duration-300s">
                                        Hỏi đáp về đặt hàng
                                    </a>
                                </div>
                                <div className="px-4 py-2">
                                    <a href="#hoi-dap-ve-thanh-toan" className="hover:text-primary-green duration-300s">
                                        Hỏi đáp về thanh toán
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="px-3 py-3 bg-primary-green text-sm font-bold text-white rounded-t-md uppercase">
                                Liên hệ với chúng tôi
                            </h2>
                            <div className="border border-t-0 text-sm rounded-md">
                                <p className="px-4 py-2">
                                    Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc
                                    lại với bạn sớm nhất có thể.
                                </p>
                                <div className="px-4 pb-4">
                                    <form action="" className="flex flex-col gap-2">
                                        <input
                                            type="text"
                                            placeholder="Họ và tên"
                                            className="w-full border border-[#e6e6e6] px-5 py-1 rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="w-full border border-[#e6e6e6] px-5 py-1 rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Điện thoại"
                                            className="w-full border border-[#e6e6e6] px-5 py-1 rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                        />
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Nội dung"
                                            className="w-full border border-[#e6e6e6] px-5 py-1 rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                        />
                                        <button
                                            type="submit"
                                            className="text-center w-[122px] py-2 bg-primary-yellow rounded-full hover:bg-primary-green hover:text-white duration-300"
                                        >
                                            Gửi thông tin
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CauHoiThuongGap;
