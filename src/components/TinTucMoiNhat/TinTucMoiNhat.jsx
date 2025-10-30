import axios from '@/api/axiosConfig';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { assets, feedbacks } from '@/assets/assets';
import config from '@/configs';

function TinTucMoiNhat() {
    const swiperRef = useRef(null);
    const paginationRef = useRef(null);

    const [data, setData] = useState([]);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };

    const fetchData = async (page = 1, category = 'Tin tức') => {
        try {
            const query = new URLSearchParams({
                page,
                limit: 5,
                category,
            });

            const res = await axios.get(`/api/v1/client/TinTuc/pagination?${query.toString()}`);

            if (res.data.success) {
                setData(res.data.news);
            }
        } catch (error) {
            console.log('Lỗi khi fetch tin tức:', error);
        }
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    return (
        <div className="my-8">
            <div className="flex gap-4">
                <div className="w-[74%]">
                    <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                        <div className="m-4 overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link>
                                        <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                            Tin tức mới nhất
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
                                            className={`${
                                                isEnd ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Swiper
                                    ref={swiperRef}
                                    onSlideChange={handleSlideChange}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    className="rounded-xl overflow-hidden cursor-grab"
                                >
                                    {data.map((item, index) => {
                                        const dateParts = item.date.match(/(\d{1,2})\s*tháng\s*(\d{1,2})\s*(\d{4})/);
                                        let day = '',
                                            month = '',
                                            year = '';

                                        if (dateParts) {
                                            day = dateParts[1];
                                            month = dateParts[2];
                                            year = dateParts[3];
                                        }

                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="bg-white h-80 rounded-xl">
                                                    <div className="relative">
                                                        <Link>
                                                            <img src={item.image} alt="" className="rounded-xl" />
                                                        </Link>
                                                        <div className="absolute top-2 left-0 bg-primary-green w-[72px] h-11 rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-center text-white text-xs font-medium shadow-md">
                                                            <span className="text-lg font-bold leading-none">
                                                                {day}
                                                            </span>
                                                            <span>{`${month.padStart(2, '0')}/${year}`}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 p-3">
                                                        <Link>
                                                            <h1 className="h-12 line-clamp-2 font-semibold">
                                                                {item.name}
                                                            </h1>
                                                        </Link>
                                                        <p className="line-clamp-3 text-sm text-[#333]">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                            <Link to={config.routes.TinTuc}>
                                <button className="flex justify-center mx-auto mt-6 border border-primary-green rounded-full font-semibold text-primary-green px-6 py-1 hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-300">
                                    Xem tất cả
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[26%]">
                    <div className="w-full h-full bg-[#f7f7f7] rounded-xl flex p-4 flex-col relative">
                        <h1 className="text-[28px] font-bold mb-2">Đánh giá</h1>
                        <div className="bg-white rounded-xl border border-[#ececec] w-[280px] mx-auto cursor-grab relative">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    el: paginationRef.current,
                                }}
                                onSwiper={(swiper) => {
                                    setTimeout(() => {
                                        if (swiper.params.pagination && typeof swiper.params.pagination === 'object') {
                                            swiper.params.pagination.el = paginationRef.current;
                                            swiper.pagination.init();
                                            swiper.pagination.render();
                                            swiper.pagination.update();
                                        }
                                    });
                                }}
                            >
                                {feedbacks.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex flex-col items-center gap-4 px-6 py-4">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="w-[100px] h-[100px] rounded-full"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[15px] text-[#353535]">{item.comment}</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-center">
                                                <h1 className="text-lg text-primary-green font-semibold">
                                                    {item.name}
                                                </h1>
                                                <img src={assets.iconGach} alt="" className="w-18 h-3 my-2" />
                                                <p className="text-sm text-[#353535]">{item.job}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Pagination container được tham chiếu */}
                            <div
                                ref={paginationRef}
                                className="swiper-pagination absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTucMoiNhat;
