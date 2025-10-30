import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules'; // thêm Thumbs
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
    faAngleRight,
    faChevronLeft,
    faChevronRight,
    faEye,
    faLocationDot,
    faPen,
    faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets, product } from '@/assets/assets';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

function DisplayProduct() {
    const { slug } = useParams();

    const swiperRelateRef = useRef(null);
    const swiperWatchedRef = useRef(null);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isMoTa, setIsMoTa] = useState(true);
    const [isHuongDan, setIsHuongDan] = useState(false);
    const [isDanhGia, setIsDanhGia] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isBeginningRelate, setIsBeginningRelate] = useState(true);
    const [isEndRelate, setIsEndRelate] = useState(false);
    const [isBeginningWatched, setIsBeginningWatched] = useState(true);
    const [isEndWatched, setIsEndWatched] = useState(false);

    const handleSlideRelateChange = () => {
        const swiper = swiperRelateRef.current?.swiper;
        if (swiper) {
            setIsBeginningRelate(swiper.isBeginningRelate);
            setIsEndRelate(swiper.isEndRelate);
        }
    };

    const handleSlideWatchedChange = () => {
        const swiper = swiperWatchedRef.current?.swiper;
        if (swiper) {
            setIsBeginningWatched(swiper.isBeginningWatched);
            setIsEndWatched(swiper.isEndWatched);
        }
    };

    const formatPrice = (price) => {
        return price?.toLocaleString('vi-VN') + '₫';
    };

    const images = [assets.hanhTay, assets.ngoRi, assets.dauCove, assets.caChuaHaLan, assets.biDao, assets.biDao];

    const coupons = [
        { value: '50K', code: 'BEA50', description: 'Nhập mã BEA50 giảm 50K đơn từ 750K' },
        { value: '15%', code: 'BEA15', description: 'Nhập mã BEA15 giảm 15% đơn từ 1.500.000đ' },
        { value: '99K', code: 'BEAN99K', description: 'Nhập mã BEAN99K giảm ngay 99K' },
        { value: '0K', code: 'FREESHIP', description: 'Nhập mã FREESHIP miễn phí vận chuyển' },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Rau ăn củ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Hành tây</h1>
                    </div>
                </div>
            </div>

            <div className="w-[83%] mx-auto">
                <div className="flex gap-2 items-start">
                    <div className="flex gap-2 w-2/4 sticky top-2">
                        {/* Thumbnail Swiper */}
                        <div className="w-1/5">
                            <Swiper
                                onSwiper={setThumbsSwiper} // gán instance
                                direction="vertical"
                                spaceBetween={10}
                                slidesPerView={4}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs]}
                                className="h-[490px] thumbs-swiper"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-[112px] h-[112px]">
                                            <img
                                                src={img}
                                                alt={`thumb-${index}`}
                                                className="w-full h-full object-cover border rounded-md cursor-pointer"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Main Swiper */}
                        <div className="w-[485px] relative">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Navigation, Thumbs]}
                                className="h-[490px]"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`main-${index}`}
                                            className="w-[485px] h-[485px] object-contain rounded-md"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="absolute top-2 bg-[#ff0000] w-[50px] h-[50px] rounded-b-[10px] z-10 flex items-center justify-center">
                                <span className="text-white text-[13px] uppercase text-center font-medium">
                                    - 17% OFF
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="text-sm font-semibold mr-2">Chia sẻ</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#336699] hover:opacity-70 cursor-pointer duration-300">
                                        <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ca3333] hover:opacity-70 cursor-pointer duration-300">
                                        <FontAwesomeIcon icon={faPinterest} className="text-white" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#00acec] hover:opacity-70 cursor-pointer duration-300">
                                        <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-2/4">
                        <h1 className="font-bold text-2xl">Hành tây</h1>
                        <div className="flex flex-col border-b pb-3">
                            <div className="flex items-center gap-4">
                                <p>
                                    Thương hiệu: <span className="text-primary-green font-medium">Bean Farm</span>
                                </p>
                                <span>|</span>
                                <p>
                                    Tình trạng: <span className="text-primary-green font-medium">Còn hàng</span>
                                </p>
                            </div>
                            <p>Mã SKU: Đang cập nhật</p>
                        </div>
                        <div className="flex flex-col border-b pb-3">
                            <div className="flex items-center gap-4">
                                <p className="text-[26px] font-bold">
                                    Giá: <span className="text-[#c90000] font-semibold">120.000₫</span>
                                </p>
                                <p className="text-[#545454] mt-1 line-through">Giá thị trường: 145.000₫</p>
                            </div>
                            <p className="text-sm">
                                Tiết kiệm: <span className="text-[#ef1104]">25.000₫</span> so với giá thị trường
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faEye} />
                            <p>27 người đang xem sản phẩm này</p>
                        </div>
                        <div className="bg-[#f9f9f9] pt-[7px] px-[7px] pb-[2px] border-l-2 border-primary-green rounded-md">
                            <p className="text-sm leading-relaxed">
                                Hành tây cung cấp một nguồn vitamin C, B6, sắt, kali và mangan để bảo vệ cơ thể khỏi cái
                                lạnh và cảm cúm. Ngoài ra còn giàu Organosulfurs và các Flavonoid có thể giúp ngăn ngừa
                                bệnh tim và tăng cường sức khỏe tim mạch. Nhờ chứa nhiều vitamin A, E và C mà hành tây
                                có thể hỗ trợ tăng cường sức khỏe và bảo vệ da.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary-green hover:text-primary-yellow duration-300 cursor-pointer">
                            <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                            <p>Tìm cửa hàng gần bạn nhất</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold">Ghi chú:</p>
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faPen}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Thêm ghi chú sản phẩm"
                                    className="w-full h-10 pl-10 pr-3 border border-[#7d7d7d] rounded-full text-sm focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[145px] flex items-center border border-gray-600 rounded-full overflow-hidden">
                                <button
                                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                                    className="w-[45px] h-[45px] hover:bg-primary-green hover:border-primary-green hover:text-white duration-300"
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    min={1}
                                    value={quantity}
                                    readOnly
                                    className="w-[55px] h-[45px] text-center leading-[45px] outline-none border-gray-600
                                    [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />

                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="w-[45px] h-[45px] hover:bg-primary-green hover:border-primary-green hover:text-white duration-300"
                                >
                                    +
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="bg-primary-green text-white text-xs uppercase w-[360px] h-[45px] font-bold rounded-full hover:bg-primary-yellow hover:text-black duration-300">
                                    Thêm vào giỏ
                                </button>
                                <button className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-[22px] text-primary-green" />
                                </button>
                                <button className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full">
                                    <FontAwesomeIcon icon={faShuffle} className="text-[22px] text-primary-green" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                                <img src={assets.chinhSach1} alt="" className="w-8 h-8" />
                                <p className="text-sm">Miễn phí vận chuyển tại TP.HCM</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={assets.chinhSach2} alt="" className="w-8 h-8" />
                                <p className="text-sm">Bảo hành chính hãng toàn quốc</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={assets.chinhSach3} alt="" className="w-8 h-8" />
                                <p className="text-sm">Cam kết chính hãng 100%</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={assets.chinhSach4} alt="" className="w-8 h-8" />
                                <p className="text-sm">1 đổi 1 nếu sản phẩm lỗi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[83%] mx-auto mt-6">
                <div className="bg-[#3bb77e1a] p-[10px] rounded-lg">
                    <h1 className="text-[28px] text-primary-green font-bold text-center uppercase mb-[10px]">
                        Mã giảm giá
                    </h1>
                    <div className="grid grid-cols-4 gap-4">
                        {coupons.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-[5px] rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.15)]"
                            >
                                <p className="text-primary-yellow font-bold">{item.value}</p>
                                <p className="text-sm">{item.description}</p>
                                <div className="flex items-center justify-between bg-[#f5f5f5] rounded-md p-[3px]">
                                    <p className="font-semibold">{item.code}</p>
                                    <button className="text-xs px-4 py-1 bg-primary-green text-white rounded-full hover:bg-primary-yellow hover:text-black duration-300">
                                        Lưu mã
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto mt-6">
                <div className="flex gap-4 items-start">
                    <div className="w-[75%]">
                        <div className="flex items-center border-b mb-5">
                            <div
                                className={`${
                                    isMoTa ? 'bg-primary-green text-white' : 'bg-white text-black'
                                } mr-5 px-4 py-[10px] rounded-t-md hover:bg-primary-green hover:text-white cursor-pointer`}
                                onClick={() => {
                                    setIsMoTa(true);
                                    setIsHuongDan(false);
                                    setIsDanhGia(false);
                                }}
                            >
                                <h1 className="text-lg font-bold">Mô tả sản phẩm</h1>
                            </div>
                            <div
                                className={`${
                                    isHuongDan ? 'bg-primary-green text-white' : 'bg-white text-black'
                                } mr-5 px-4 py-[10px] rounded-t-md hover:bg-primary-green hover:text-white cursor-pointer`}
                                onClick={() => {
                                    setIsMoTa(false);
                                    setIsHuongDan(true);
                                    setIsDanhGia(false);
                                }}
                            >
                                <h1 className="text-lg font-bold">Hướng dẫn mua hàng</h1>
                            </div>
                            <div
                                className={`${
                                    isDanhGia ? 'bg-primary-green text-white' : 'bg-white text-black'
                                } mr-5 px-4 py-[10px] rounded-t-md hover:bg-primary-green hover:text-white cursor-pointer`}
                                onClick={() => {
                                    setIsMoTa(false);
                                    setIsHuongDan(false);
                                    setIsDanhGia(true);
                                }}
                            >
                                <h1 className="text-lg font-bold">Đánh giá</h1>
                            </div>
                        </div>
                        {isMoTa && (
                            <>
                                <div
                                    className={`relative transition-all duration-500 ${
                                        isShow ? 'max-h-[2000px]' : 'max-h-[440px] overflow-hidden'
                                    }`}
                                >
                                    <div>
                                        <p className="text-sm mb-4">
                                            <strong>Chứng nhận/Canh tác: </strong>Canh tác theo hướng hữu cơ. Trang trại
                                            không sử dụng phân bón hóa học, không sử dụng thuốc diệt cỏ, không dùng bất
                                            cứ loại hóa chất bảo vệ thực vật nào. Chỉ sử dụng các loại phân gà đã có
                                            chứng nhận hữu cơ OMRILIST, sử dụng thêm các loại phân chuồng ủ hoai cùng
                                            thực vậy, các loại phân trùn quế tùy theo mùa. Tùy vào từng mùa trong năm,
                                            vườn có sử dụng thêm các chế phẩm sinh học được cho phép theo tiêu chuẩn
                                            canh tác hữu cơ USDA (Mỹ) phòng ngừa sâu bệnh và dịch hại. Canh tác trong
                                            vườn được ghi chép nhật ký để luân canh, xen canh, cải tạo đất.
                                        </p>
                                        <p className="text-sm mb-4">
                                            <strong>Xuất xứ: </strong>Trang trại tại Xuân Thành, Lâm Đồng, Việt Nam.
                                        </p>
                                        <p className="text-sm mb-4">
                                            <strong>Công dụng: </strong>Hành tây cung cấp một nguồn vitamin C, B6, sắt,
                                            kali và mangan để bảo vệ cơ thể khỏi cái lạnh và cảm cúm. Ngoài ra còn giàu
                                            Organosulfurs và các Flavonoid có thể giúp ngăn ngừa bệnh tim và tăng cường
                                            sức khỏe tim mạch. Nhờ chứa nhiều vitamin A, E và C mà hành tây có thể hỗ
                                            trợ tăng cường sức khỏe và bảo vệ da.
                                        </p>
                                        <p className="text-sm mb-4">
                                            <strong>Gợi ý sử dụng: </strong>Dùng trong các món chiên, nướng, hấp, xào,
                                            kho, sốt. Cách chế biến hành tây thông dụng là trộn dầu giấm ăn sống, trộn
                                            chung trong đĩa salad, làm tăng hương vị cho các món gỏi (gỏi ngó sen, gỏi
                                            su hào, gỏi dưa leo, gỏi cóc…), hoặc chiên xào với các loại thịt, trứng, nấu
                                            súp, cà ri…
                                        </p>
                                        <p className="text-sm mb-4">
                                            <strong>Hướng dẫn bảo quản: </strong>Phải đảm bảo độ thông hơi để giữ cho
                                            hành luôn được thông thoáng, khô ráo. Không dùng túi nhựa hoặc hộp kín để
                                            bảo quản hành vì chúng sẽ ngăn sự lưu thông không khí, khiến hành nhanh bị
                                            thối, mốc.
                                        </p>
                                        <p className="text-sm mb-4">
                                            <strong>Hạn sử dụng: </strong>3 - 5 tuần nếu bảo quản trong tủ lạnh
                                        </p>
                                    </div>

                                    {/* lớp mờ */}
                                    {!isShow && (
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
                                            style={{
                                                background:
                                                    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 15%, #fff)',
                                            }}
                                        ></div>
                                    )}
                                </div>

                                {/* nút xem thêm / thu gọn */}
                                <div className="flex justify-center mt-4">
                                    <button
                                        className="flex items-center justify-center gap-2 px-4 py-[5px] border border-black rounded-full text-lg font-medium hover:bg-primary-green hover:text-white hover:border-primary-green duration-300"
                                        onClick={() => setIsShow(!isShow)}
                                    >
                                        {isShow ? 'Thu gọn' : 'Xem thêm'}
                                        <FontAwesomeIcon
                                            icon={isShow ? faAngleDoubleUp : faAngleDoubleDown}
                                            size="xs"
                                        />
                                    </button>
                                </div>
                            </>
                        )}

                        {isHuongDan && (
                            <>
                                <div>
                                    <p className="text-sm mb-4">
                                        <strong>Bước 1: </strong>Truy cập website và lựa chọn sản phẩm cần mua
                                    </p>
                                    <p className="text-sm mb-4">
                                        <strong>Bước 2: </strong>Click và sản phẩm muốn mua, màn hình hiển thị ra pop up
                                        với các lựa chọn sau
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm
                                        sản phẩm vào giỏ hàng
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng
                                        và thanh toán
                                    </p>
                                    <p className="text-sm mb-4">
                                        <strong>Bước 3: </strong>Lựa chọn thông tin tài khoản thanh toán
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật
                                        khẩu vào mục đã có tài khoản trên hệ thống
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin
                                        cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi
                                        được đơn hàng của mình
                                    </p>
                                    <p className="text-sm mb-4">
                                        Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt
                                        hàng không cần tài khoản
                                    </p>
                                    <p className="text-sm mb-4">
                                        <strong>Bước 4: </strong>Điền các thông tin của bạn để nhận đơn hàng, lựa chọn
                                        hình thức thanh toán và vận chuyển cho đơn hàng của mình
                                    </p>
                                    <p className="text-sm mb-4">
                                        <strong>Bước 5: </strong>Xem lại thông tin đặt hàng, điền chú thích và gửi đơn
                                        hàng
                                    </p>
                                    <p className="text-sm mb-4">
                                        Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại
                                        để xác nhận lại đơn hàng và địa chỉ của bạn.
                                    </p>
                                    <p className="text-sm mb-4">Trân trọng cảm ơn.</p>
                                </div>
                            </>
                        )}

                        {isDanhGia && (
                            <>
                                <div className="bg-[#3bb77e1a] mb-4 px-5 py-3 border border-[#bee5eb] rounded-md">
                                    <p className="text-sm text-[#0c5460]">
                                        Bạn tiến hàng mua và cài app{' '}
                                        <a
                                            href="https://apps.sapo.vn/danh-gia-san-pham-v2"
                                            target="_blank"
                                            className="text-red-600"
                                        >
                                            Đánh giá sản phẩm
                                        </a>{' '}
                                        mới sử dụng được tính năng này!
                                    </p>
                                </div>
                            </>
                        )}
                        <div className="bg-[#3bb77e1a] p-[15px] mt-[25px] rounded-md">
                            <h1 className="text-[22px] font-bold mb-[15px]">
                                Thông tin thương hiệu: <span className="text-primary-green">Bean Farm</span>
                            </h1>
                            <div className="mb-[15px]">
                                <img src={assets.logo} alt="" className="max-w-[180px]" />
                            </div>
                            <p className="text-sm mb-[15px]">
                                Bạn đang chọn mua các loại thực phẩm hữu cơ của Bean Farm, một trong những thương hiệu
                                tiên phong về phát triển thực phẩm hữu cơ tại Việt Nam. Bạn sẽ yên tâm, không còn phải
                                lo lắng về bữa ăn của gia đình mình nữa khi chọn mua các sản phẩm hữu cơ của Bean Farm
                                vì quá trình sản xuất đảm bảo không sử dụng phân bón hoá học, thuốc trừ sâu, trừ cỏ độc
                                hại, không dùng chất kích thích tăng trưởng hay chất bảo quản, không sử dụng giống hay
                                thành phần biến đổi gene (GMO). Bean Farm có trang trại trồng rau củ quả nhiệt đới đạt
                                chuẩn hữu cơ quốc tế USDA của Mỹ và Liên minh châu Âu (EU) đầu tiên tại Việt Nam từ năm
                                2021. Từ các nông sản từ trang trại hữu cơ, Bean Farm cũng chế biến thành các loại thực
                                phẩm khô chứng nhận hữu cơ quốc tế. Không chỉ là đơn vị đầu tư sản xuất, Bean Farm cũng
                                là đơn vị đầu tiên tại Việt Nam phát triển chuỗi cửa hàng bán lẻ thực phẩm hữu cơ tại
                                TP.HCM, Hà Nội và Đà Nẵng.
                            </p>
                            <button className="bg-white text-primary-green text-sm font-semibold px-3 py-2 border border-primary-green rounded-full hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-300">
                                Xem tất cả sản phẩm của thương hiệu
                            </button>
                        </div>
                    </div>
                    <div className="w-[25%] sticky top-2">
                        <Link>
                            <div className="bg-primary-green text-white px-4 py-[10px] rounded-t-md hover:text-primary-yellow">
                                <h1 className="text-lg font-bold text-center">Có thể bạn thích</h1>
                            </div>
                        </Link>
                        <div className="px-[10px] pt-[10px] border rounded-b-md">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={index} className="pb-[10px] flex gap-2">
                                    <div className="w-[65px] h-[65px] border flex items-center justify-center rounded-md">
                                        <Link>
                                            <img src={assets.hanhTay} alt="" className="w-[60px] h-[60px]" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link>
                                            <h1 className="text-sm font-bold pb-1 hover:text-primary-green duration-300">
                                                Hành Tây
                                            </h1>
                                        </Link>
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm text-red-600 font-bold">120.000₫</p>
                                            <p className="text-xs text-[#9e9e9e] line-through">145.000₫</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto my-10">
                <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                    <div className="my-4 mx-4 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link>
                                    <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                        Sản phẩm liên quan
                                    </h1>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isBeginningRelate
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isBeginningRelate) swiperRelateRef.current?.swiper?.slidePrev();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        size="lg"
                                        className={`${
                                            isBeginningRelate ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isEndRelate
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isEndRelate) swiperRelateRef.current?.swiper?.slideNext();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        size="lg"
                                        className={`${
                                            isEndRelate ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Swiper
                                ref={swiperRelateRef}
                                onSlideChange={handleSlideRelateChange}
                                modules={[Navigation, Pagination]}
                                slidesPerView="auto"
                                spaceBetween={20}
                                className="rounded-xl overflow-hidden px-10 mx-12"
                            >
                                {product.map((item, index) => (
                                    <SwiperSlide key={index} className="!w-[230px] flex justify-center">
                                        <div className="w-full h-[330px] bg-white rounded-xl border border-[#f0f1f2] z-0">
                                            <div className="relative">
                                                <Link to={`/${item.slug}`}>
                                                    <img src={item.image} alt="" className="rounded-xl" />
                                                </Link>
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <Link to={`/${item.slug}`}>
                                                    <h1 className="font-semibold mb-2">{item.name}</h1>
                                                </Link>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Thêm vào giỏ
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto mt-10 mb-20">
                <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                    <div className="my-4 mx-4 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link>
                                    <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                        Sản phẩm đã xem
                                    </h1>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isBeginningWatched
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isBeginningWatched) swiperWatchedRef.current?.swiper?.slidePrev();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        size="lg"
                                        className={`${
                                            isBeginningWatched ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isEndWatched
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isEndWatched) swiperWatchedRef.current?.swiper?.slideNext();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        size="lg"
                                        className={`${
                                            isEndWatched ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Swiper
                                ref={swiperWatchedRef}
                                onSlideChange={handleSlideWatchedChange}
                                modules={[Navigation, Pagination]}
                                slidesPerView="auto"
                                spaceBetween={20}
                                className="rounded-xl overflow-hidden px-10 mx-12"
                            >
                                {product.map((item, index) => (
                                    <SwiperSlide key={index} className="!w-[230px] flex justify-center">
                                        <div className="w-full h-[330px] bg-white rounded-xl border border-[#f0f1f2] z-0">
                                            <div className="relative">
                                                <Link to={`/${item.slug}`}>
                                                    <img src={item.image} alt="" className="rounded-xl" />
                                                </Link>
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <Link to={`/${item.slug}`}>
                                                    <h1 className="font-semibold mb-2">{item.name}</h1>
                                                </Link>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Thêm vào giỏ
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayProduct;
