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
import config from '@/configs';

function ProductCategoryList() {
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
            image: assets.danhmuc1,
            route: config.routes.RauCuQua,
        },
        {
            id: 2,
            name: 'Trái cây',
            image: assets.danhmuc2,
            route: config.routes.TraiCay,
        },
        {
            id: 3,
            name: 'Thịt',
            image: assets.danhmuc3,
            route: config.routes.ThitHeo,
        },
        {
            id: 4,
            name: 'Trứng',
            image: assets.danhmuc4,
            route: config.routes.SanPhamKhuyenMai,
        },
        {
            id: 5,
            name: 'Đồ uống',
            image: assets.danhmuc5,
            route: config.routes.ThucUong,
        },
        {
            id: 6,
            name: 'Bánh và sữa',
            image: assets.danhmuc6,
            route: config.routes.BanhMiDongLanh,
        },
        {
            id: 7,
            name: 'Hải sản',
            image: assets.danhmuc7,
            route: config.routes.ThuyHaiSan,
        },
        {
            id: 8,
            name: 'Bánh mì',
            image: assets.danhmuc8,
            route: config.routes.MiCacLoai,
        },
        {
            id: 9,
            name: 'Salad',
            image: assets.danhmuc9,
            route: config.routes.RauAnLa,
        },
        {
            id: 10,
            name: 'Thực phẩm khô',
            image: assets.danhmuc10,
            route: config.routes.DoKho,
        },
    ];
    return (
        <div className="w-[945px] mx-auto relative mt-4">
            <Swiper
                ref={swiperRef}
                onSlideChange={handleSlideChange}
                modules={[Navigation, Pagination]}
                slidesPerView={6}
                spaceBetween={10}
                className=""
            >
                {items.map((item, index) => (
                    <SwiperSlide>
                        <Link to={item.route}>
                            <div key={index} className="group flex flex-col justify-center items-center">
                                <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full border-2 group-hover:border-primary-green duration-300">
                                    <img src={item.image} alt="" className="w-[105px] h-[105px]" />
                                </div>
                                <h1 className="text-white text-sm font-bold mt-4 tracking-wider group-hover:text-primary-green duration-300">
                                    {item.name}
                                </h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nút Prev */}
            <div
                className={`absolute top-[45%] left-5 -translate-y-[45%] z-10 group w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isBeginning
                        ? 'opacity-0'
                        : 'bg-white border border-primary-green hover:bg-primary-green cursor-pointer'
                }`}
                onClick={() => {
                    if (!isBeginning) swiperRef.current?.swiper?.slidePrev();
                }}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="sm"
                    className={`${isBeginning ? '' : 'text-primary-green group-hover:text-white'}`}
                />
            </div>

            {/* Nút Next */}
            <div
                className={`absolute top-[45%] right-5 -translate-y-[45%] z-10 group w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isEnd ? 'opacity-0' : 'bg-white border border-primary-green hover:bg-primary-green cursor-pointer'
                }`}
                onClick={() => {
                    if (!isEnd) swiperRef.current?.swiper?.slideNext();
                }}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size="sm"
                    className={`${isEnd ? '' : 'text-primary-green group-hover:text-white'}`}
                />
            </div>
        </div>
    );
}

export default ProductCategoryList;
