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

function DoiTac() {
    const swiperRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const partner = [
        assets.partner1,
        assets.partner2,
        assets.partner3,
        assets.partner4,
        assets.partner5,
        assets.partner6,
        assets.partner7,
    ];

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
                                    Đối tác của chúng tôi
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
                            slidesPerView={6}
                            spaceBetween={20}
                            className="rounded-xl overflow-hidden"
                        >
                            {partner.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group cursor-pointer rounded-xl transition-shadow duration-300 overflow-hidden">
                                        <div className="relative overflow-hidden rounded-xl">
                                            <img
                                                src={item}
                                                className="w-full h-14 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoiTac;
