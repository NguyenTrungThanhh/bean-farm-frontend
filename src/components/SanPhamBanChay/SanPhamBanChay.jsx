import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { assets, product } from '@/assets/assets';
import ProductItem from '@/components/ProductItem';

function SanPhamBanChay() {
    const swiperRef = useRef(null);
    const [isRauCu, setIsRauCu] = useState(true);
    const [isTraiCay, setIsTraiCay] = useState(false);
    const [isDoKho, setIsDoKho] = useState(false);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };

    return (
        <div className="my-8">
            <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                <div className="relative w-[300px]">
                    <img src={assets.productOutstandingBanner} alt="" className="rounded-tl-xl rounded-bl-xl" />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-tl-xl rounded-bl-xl"></div>

                    <div className="absolute top-4 left-6">
                        <Link>
                            <h1 className="text-white text-3xl font-bold drop-shadow-lg hover:text-primary-yellow duration-300 cursor-pointer">
                                Bán chạy nhất hàng ngày
                            </h1>
                        </Link>
                        <p className="italic text-white underline my-2">Ưu đãi độc quyền - Giảm giá 20%</p>
                        <p className="text-white text-xl font-bold my-2">Mua sắm thoải mái chỉ từ 20.000 VNĐ</p>
                        <p className="text-white">Chỉ trong tuần này. Đừng bỏ lỡ...</p>
                        <button className="text-sm px-4 py-2 bg-white rounded-full mt-4 font-semibold hover:bg-primary-yellow duration-300">
                            Mua ngay
                        </button>
                    </div>
                </div>
                <div className="my-4 flex-1 mx-4 overflow-hidden">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div
                                className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                    isBeginning
                                        ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                        : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                }`}
                                onClick={() => {
                                    if (!isBeginning) swiperRef.current?.swiper?.slidePrev();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    size="lg"
                                    className={`${
                                        isBeginning ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                    }`}
                                />
                            </div>

                            <div
                                className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                    isEnd
                                        ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                        : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                }`}
                                onClick={() => {
                                    if (!isEnd) swiperRef.current?.swiper?.slideNext();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    size="lg"
                                    className={`${isEnd ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'}`}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <h1
                                    className={`font-bold hover:text-primary-yellow cursor-pointer ${
                                        isRauCu ? 'text-primary-yellow' : ''
                                    }`}
                                    onClick={() => {
                                        setIsRauCu(true);
                                        setIsTraiCay(false);
                                        setIsDoKho(false);
                                    }}
                                >
                                    Rau củ
                                </h1>
                            </div>
                            <img src={assets.navSlice} alt="" />
                            <div>
                                <h1
                                    className={`font-bold hover:text-primary-yellow cursor-pointer ${
                                        isTraiCay ? 'text-primary-yellow' : ''
                                    }`}
                                    onClick={() => {
                                        setIsRauCu(false);
                                        setIsTraiCay(true);
                                        setIsDoKho(false);
                                    }}
                                >
                                    Trái cây
                                </h1>
                            </div>
                            <img src={assets.navSlice} alt="" />
                            <div>
                                <h1
                                    className={`font-bold hover:text-primary-yellow cursor-pointer ${
                                        isDoKho ? 'text-primary-yellow' : ''
                                    }`}
                                    onClick={() => {
                                        setIsRauCu(false);
                                        setIsTraiCay(false);
                                        setIsDoKho(true);
                                    }}
                                >
                                    Đồ khô
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Swiper
                            ref={swiperRef}
                            onSlideChange={handleSlideChange}
                            modules={[Navigation, Pagination]}
                            slidesPerView="auto"
                            spaceBetween={20}
                            className="rounded-xl overflow-hidden"
                        >
                            {product.map((item, index) => (
                                <SwiperSlide key={index} className="!w-[217px]">
                                    <ProductItem
                                        slug={item.slug}
                                        name={item.name}
                                        image={item.image}
                                        oldPrice={item.oldPrice}
                                        newPrice={item.newPrice}
                                        discount={item.discount}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className="flex justify-center mx-auto mt-6 border border-primary-green rounded-full font-semibold text-primary-green px-6 py-1 hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-300">
                        <Link>Xem tất cả</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SanPhamBanChay;
