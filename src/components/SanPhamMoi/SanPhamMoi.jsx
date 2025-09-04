import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { product } from '@/assets/assets';
import ProductItem from '@/components/ProductItem';

function SanPhamMoi() {
    const swiperRef = useRef(null);

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
        <div className="my-10">
            <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                <div className="my-4 mx-4 overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link>
                                <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                    Sản phẩm mới
                                </h1>
                            </Link>
                        </div>
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
                    </div>

                    <div className="mt-4">
                        <Swiper
                            ref={swiperRef}
                            onSlideChange={handleSlideChange}
                            modules={[Navigation, Pagination]}
                            slidesPerView={5}
                            spaceBetween={20}
                            className="rounded-xl overflow-hidden"
                        >
                            {product.map((item, index) => (
                                <SwiperSlide key={index} className="!w-[230px]">
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

export default SanPhamMoi;
