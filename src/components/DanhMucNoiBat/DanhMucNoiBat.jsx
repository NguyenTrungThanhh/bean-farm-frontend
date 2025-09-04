import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { assets } from '@/assets/assets';

function DanhMucNoiBat() {
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

    const items = [
        {
            id: 1,
            name: 'Rau củ',
            quantity: 17,
            image: assets.danhmuc1,
        },
        {
            id: 2,
            name: 'Trái cây',
            quantity: 12,
            image: assets.danhmuc2,
        },
        {
            id: 3,
            name: 'Thịt',
            quantity: 10,
            image: assets.danhmuc3,
        },
        {
            id: 4,
            name: 'Trứng',
            quantity: 8,
            image: assets.danhmuc4,
        },
        {
            id: 5,
            name: 'Đồ uống',
            quantity: 11,
            image: assets.danhmuc5,
        },
        {
            id: 6,
            name: 'Bánh và sữa',
            quantity: 0,
            image: assets.danhmuc6,
        },
        {
            id: 7,
            name: 'Hải sản',
            quantity: 10,
            image: assets.danhmuc7,
        },
        {
            id: 8,
            name: 'Bánh mì',
            quantity: 3,
            image: assets.danhmuc8,
        },
        {
            id: 9,
            name: 'Salad',
            quantity: 5,
            image: assets.danhmuc9,
        },
        {
            id: 10,
            name: 'Thực phẩm khô',
            quantity: 10,
            image: assets.danhmuc10,
        },
        {
            id: 11,
            name: 'Kiwi hữu cơ',
            quantity: 4,
            image: assets.danhmuc11,
        },
        {
            id: 12,
            name: 'Hồng giòn',
            quantity: 7,
            image: assets.danhmuc12,
        },
    ];

    return (
        <div className="my-12">
            <div className="flex items-center justify-between">
                <Link>
                    <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">Danh mục nổi bật</h1>
                </Link>
                <div className="flex items-center gap-3">
                    <Link>
                        <h1 className="text-[#333] font-bold hover:text-primary-yellow duration-300">Trái cây</h1>
                    </Link>
                    <Link>
                        <h1 className="text-[#333] font-bold hover:text-primary-yellow duration-300">Rau củ quả</h1>
                    </Link>
                    <Link>
                        <h1 className="text-[#333] font-bold hover:text-primary-yellow duration-300">Thực phẩm sạch</h1>
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <div
                        className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                            isBeginning
                                ? 'bg-[#f2f3f4] opacity-50 hover:bg-[#008b4b]'
                                : 'bg-[#f2f3f4] hover:bg-primary-green cursor-pointer'
                        }`}
                        onClick={() => {
                            if (!isBeginning) swiperRef.current?.swiper?.slidePrev();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            size="lg"
                            className={`${isBeginning ? 'text-[#ccc]' : 'text-[#7e7e7e] group-hover:text-white'}`}
                        />
                    </div>

                    <div
                        className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                            isEnd
                                ? 'bg-[#f2f3f4] opacity-50 hover:bg-[#008b4b]'
                                : 'bg-[#f2f3f4] hover:bg-primary-green cursor-pointer'
                        }`}
                        onClick={() => {
                            if (!isEnd) swiperRef.current?.swiper?.slideNext();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            size="lg"
                            className={`${isEnd ? 'text-[#ccc]' : 'text-[#7e7e7e] group-hover:text-white'}`}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden mt-2">
                <Swiper
                    ref={swiperRef}
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, Pagination]}
                    slidesPerView={9}
                    spaceBetween={10}
                    className="rounded-xl h-44"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="group flex flex-col items-center justify-center bg-[#f4f6fa] rounded-xl py-2 duration-300 cursor-pointer hover:border hover:border-[#cae7d5] hover:shadow-md transition-shadow">
                                <div>
                                    <img src={item.image} alt="" className="w-[100px] h-[100px] object-cover" />
                                </div>
                                <div className="my-2 text-center">
                                    <h1 className="text-sm font-semibold text-[#2d2d2d] duration-300 group-hover:text-primary-green">
                                        {item.name}
                                    </h1>
                                    <p className="text-[#7e7e7e] text-xs">{item.quantity} sản phẩm</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default DanhMucNoiBat;
