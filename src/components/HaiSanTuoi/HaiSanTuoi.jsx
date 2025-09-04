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

function HaiSanTuoi() {
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
        <div className="my-8">
            <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                <div className="my-4 flex-1 mx-4 overflow-hidden">
                    <div className="flex flex-1 items-center justify-between mb-2">
                        <div className="">
                            <Link>
                                <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                    Hải sản tươi
                                </h1>
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link>
                                <div className="bg-white px-4 py-[6px] border border-[#dee2e6] rounded-full hover:border-primary-green hover:text-primary-green duration-300">
                                    <h1 className="text-sm font-medium">Tôm sú</h1>
                                </div>
                            </Link>
                            <Link>
                                <div className="bg-white px-4 py-[6px] border border-[#dee2e6] rounded-full hover:border-primary-green hover:text-primary-green duration-300">
                                    <h1 className="text-sm font-medium">Chả mực</h1>
                                </div>
                            </Link>
                            <Link>
                                <div className="bg-white px-4 py-[6px] border border-[#dee2e6] rounded-full hover:border-primary-green hover:text-primary-green duration-300">
                                    <h1 className="text-sm font-medium">Cá thu</h1>
                                </div>
                            </Link>
                            <Link>
                                <div className="bg-white px-4 py-[6px] border border-[#dee2e6] rounded-full hover:border-primary-green hover:text-primary-green duration-300">
                                    <h1 className="text-sm font-medium">Cua biển</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="relative">
                                <Swiper
                                    ref={swiperRef}
                                    onSlideChange={handleSlideChange}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    slidesPerGroup={1}
                                    className="rounded-xl overflow-hidden"
                                >
                                    {product.map((item, index) => (
                                        <SwiperSlide key={index} className="!w-[214px]">
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
                                {/* Nút Prev */}
                                <div
                                    className={`absolute top-1/2 left-1 -translate-y-1/2 z-10 group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
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

                                {/* Nút Next */}
                                <div
                                    className={`absolute top-1/2 right-1 -translate-y-1/2 z-10 group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
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
                            <button className="flex justify-center w-fit mx-auto mt-6 border border-primary-green rounded-full font-semibold text-primary-green px-6 py-1 hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-300">
                                <Link>Xem tất cả</Link>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 w-[292px] shrink-0 overflow-hidden">
                            <Link>
                                <div className="group w-full h-[190px] rounded-xl overflow-hidden">
                                    <img
                                        src={assets.haiSanTuoiBanner1}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 origin-center"
                                    />
                                </div>
                            </Link>
                            <Link>
                                <div className="group w-full h-[190px] rounded-xl overflow-hidden">
                                    <img
                                        src={assets.haiSanTuoiBanner2}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 origin-center"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HaiSanTuoi;
